<template>
  <div class="octo-calendar">
    <div class="header">
      <div class="header__year-row">
        <button class="arrow" @click="movePreviousYear">
          <o-icon icon="arrow-right" dir="left" class="arrow-icon" />
        </button>
        <o-h size="5" class="header__year-label">{{ header.year }}</o-h>
        <button class="arrow" @click="moveNextYear">
          <o-icon icon="arrow-right" class="arrow-icon" />
        </button>
      </div>
      <div class="header__month-row">
        <button class="arrow" @click="movePreviousMonth">
          <o-icon icon="arrow-right" dir="left" class="arrow-icon" />
        </button>
        <button type="button">
          <o-h size="5" class="header__month-label">{{
            header.month.label
          }}</o-h>
        </button>

        <div class="months__dropdown-container">
          <button
            v-for="monthOption in months"
            class="months__dropdown-month"
            :class="{ '--active': month === monthOption.number }"
            @click="selectMonth(monthOption.number)"
            :key="monthOption.number"
            v-close-popover
          >
            <o-h size="5" class="month__label">{{ monthOption.label_3 }}</o-h>
          </button>
        </div>

        <button class="arrow" @click="moveNextMonth">
          <o-icon icon="arrow-right" class="arrow-icon" />
        </button>
      </div>
    </div>
    <div class="weekdays">
      <div
        class="weekday"
        v-for="(weekday, weekdayIndex) in weekdays"
        :key="weekdayIndex"
      >
        {{ weekday.label_3 }}
      </div>
    </div>
    <div class="week" v-for="(week, weekIndex) in weeks" :key="weekIndex">
      <div
        class="day"
        v-for="(day, dayIndex) in week"
        :key="dayIndex"
        :class="{ today: day.isToday, 'not-in-month': !day.inMonth }"
      >
        <button
          class="day-button"
          :disabled="!day.inMonth"
          @click="submitDate(day.day)"
        >
          <p class="day-text">{{ day.day }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/composition-api";

import {
  _todayComps,
  _monthLabels,
  // _transformLabel,
  // _monthLength,
  // _monthCasing,
  // _weekdayLength,
  // _weekdayCasing,
  _weekdayLabels,
  _daysInMonths
} from "../../utils/CalendarData.js";

export default {
  name: "OCalendar",
  props: {
    minDate: null,
    _year: {
      type: Number,
      default: 2020
    },
    _month: {
      type: Number,
      default: 1
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      year: _todayComps.year,
      month: _todayComps.month,
      day: _todayComps.day
    });

    // Our component exposes month as 1-based, but sometimes we need 0-based
    const monthIndex = computed(() => state.month - 1);

    const isLeapYear = computed(() => {
      const leapYear = 4;
      const leapYearCentury = 100;
      const leapYear400 = 400;
      return (
        (state.year % leapYear === 0 && state.year % leapYearCentury !== 0) ||
        state.year % leapYear400 === 0
      );
    });

    // const myMinDate = computed(() => {
    //   if (!props.minDate) return null;
    // });

    const months = computed(() =>
      _monthLabels.map((monthLabel, i) => ({
        label: monthLabel,
        label_1: monthLabel.substring(0, 1),
        label_2: monthLabel.substring(0, 2),
        label_3: monthLabel.substring(0, 3),
        canSelect: monthLabel.substring(0, 3),
        number: i + 1
      }))
    );
    // State for weekday header (no dependencies yet...)
    const weekdays = computed(() =>
      _weekdayLabels.map((weekLabel, i) => ({
        label: weekLabel,
        label_1: weekLabel.substring(0, 1), // Monday => M
        label_2: weekLabel.substring(0, 2), // Monday => Mo
        label_3: weekLabel.substring(0, 3), // Monday => Mon
        number: i + 1
      }))
    );
    // State for calendar header
    const header = computed(() => ({
      month: months.value[monthIndex.value],
      year: state.year.toString()
    }));

    const firstWeekdayInMonth = computed(() => {
      // Returns number for first weekday (1-7), starting from Monday
      const firstDay = 1;
      return new Date(state.year, monthIndex.value, firstDay).getDay();
    });

    const daysInMonth = computed(() => {
      const february = 2;
      const leapDay = 29;
      if (state.month === february && isLeapYear.value) return leapDay;
      return _daysInMonths[monthIndex.value];
    });

    // Data components for previous month
    const previousMonthComps = computed(() => {
      if (state.month === 1)
        return {
          days: _daysInMonths[11],
          month: 12,
          year: state.year - 1
        };
      return {
        days:
          state.month === 3 && isLeapYear.value
            ? 29
            : _daysInMonths[monthIndex.value - 1],
        month: state.month - 1,
        year: state.year
      };
    });

    const nextMonthComps = computed(() => {
      if (state.month === 12)
        return {
          days: _daysInMonths[0],
          month: 1,
          year: state.year + 1
        };
      return {
        days:
          state.month === 1 && isLeapYear.value
            ? 29
            : _daysInMonths[monthIndex.value + 1],
        month: state.month + 1,
        year: state.year
      };
    });

    const weeks = computed(() => {
      const weeks = [];
      let previousMonth = true;
      let thisMonth = false;
      let nextMonth = false;

      let day = previousMonthComps.value.days - firstWeekdayInMonth.value + 2;
      let month = previousMonthComps.value.month;
      let year = previousMonthComps.value.year;

      // Cycle through each week of the month, up to 6 total
      for (let w = 1; w <= 6 && !nextMonth; w++) {
        // Cycle through each weekday
        const week = [];
        for (let d = 1; d <= 7; d++) {
          // We need to know when to start counting actual month days
          // We need to know when to start counting actual month days
          if (previousMonth && d >= firstWeekdayInMonth.value) {
            // Reset day/month/year counters
            day = 1;
            month = state.month;
            year = state.year;
            // ...and flag we're tracking actual month days
            previousMonth = false;
            thisMonth = true;
          }
          // Append day info for the current week
          // Note: this might or might not be an actual month day
          //  We don't know how the UI wants to display various days,
          //  so we'll supply all the data we can
          week.push({
            label: day && thisMonth ? day.toString() : "",
            day,
            weekday: d,
            week: w,
            month,
            year,
            date: new Date(year, month - 1, day),
            beforeMonth: previousMonth,
            afterMonth: nextMonth,
            inMonth: thisMonth,
            isToday:
              day === _todayComps.day &&
              month === _todayComps.month &&
              year === _todayComps.year,
            isFirstDay: thisMonth && day === 1,
            isLastDay: thisMonth && day === daysInMonth.value
          });

          // We've hit the last day of the month
          if (thisMonth && day >= daysInMonth.value) {
            thisMonth = false;
            nextMonth = true;
            day = 1;
            month = nextMonthComps.value.month;
            year = nextMonthComps.value.year;
            // Still in the middle of the month (hasn't ended yet)
          } else {
            day++;
          }
        }
        // Append week info for the month
        weeks.push(week);
      }
      return weeks;
    });

    const moveThisMonth = () => {
      emit("update:month", _todayComps.month);
      emit("update:year", _todayComps.year);
    };

    const moveNextMonth = () => {
      const { month, year } = nextMonthComps.value;
      state.month = month;
      state.year = year;
      emit("update:month", month);
      emit("update:year", year);
    };

    const movePreviousMonth = () => {
      const { month, year } = previousMonthComps.value;
      state.month = month;
      state.year = year;
      emit("update:month", month);
      emit("update:year", year);
    };

    const moveNextYear = () => {
      state.year++;
      emit("update:year", state.year + 1);
    };

    const movePreviousYear = () => {
      state.year--;
      emit("update:year", state.year - 1);
    };

    const selectMonth = month => {
      state.month = month;
    };

    const submitDate = day => {
      alert(`${state.year}-${state.month}-${day}`);
    };

    return {
      ...toRefs(state),
      monthIndex,
      isLeapYear,
      months,
      weekdays,
      header,
      firstWeekdayInMonth,
      daysInMonth,
      previousMonthComps,
      nextMonthComps,
      weeks,
      moveThisMonth,
      moveNextMonth,
      movePreviousMonth,
      moveNextYear,
      movePreviousYear,
      selectMonth,
      submitDate
    };
  }
};
</script>
