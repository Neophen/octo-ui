<template>
  <div class="octo-calendar">
    <div class="header">
      <div class="header__year-row">
        <button
          :disabled="!showPrevYear"
          class="arrow"
          @click="movePrevYear"
          type="button"
        >
          <o-icon icon="arrow-right" dir="left" class="arrow-icon" />
        </button>
        <o-h size="4" class="header__year-label">{{ header.year }}</o-h>
        <button
          :disabled="!showNextYear"
          class="arrow"
          @click="moveNextYear"
          type="button"
        >
          <o-icon icon="arrow-right" class="arrow-icon" />
        </button>
      </div>
      <div class="header__month-row">
        <button
          :disabled="!showPrevMonth"
          class="arrow"
          @click="movePrevMonth"
          type="button"
        >
          <o-icon icon="arrow-right" dir="left" class="arrow-icon" />
        </button>
        <button
          ref="refTrigger"
          @click="toggle"
          type="button"
          class="header__open-months-btn"
        >
          <o-h size="5" class="header__month-label">
            {{ header.month.label }}
          </o-h>
        </button>
        <div v-if="isPopperOpen" ref="refDropdown" class="months__dropdown">
          <div class="months__dropdown-container">
            <button
              v-for="monthOption in months"
              class="months__dropdown-month"
              :class="{ '--active': month === monthOption.number }"
              @click="selectMonth(monthOption.number)"
              :disabled="monthOption.isDisabled"
              :key="monthOption.number"
              type="button"
            >
              <o-h size="5" class="month__label">{{ monthOption.label_3 }}</o-h>
            </button>
          </div>
        </div>

        <button
          :disabled="!showNextMonth"
          class="arrow"
          @click="moveNextMonth"
          type="button"
        >
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
        :class="{
          'is-today': day.isToday,
          'is-selected': day.isSelected,
          'is-disabled': day.isDisabled
        }"
      >
        <button
          class="day-button"
          :disabled="day.isDisabled"
          @click="seletDay(day)"
          type="button"
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
  _weekdayLabels,
  _daysInMonths
} from "../../utils/CalendarData.js";
import { usePopper } from "../../utils/usePopper";

import Heading from "../Heading/Heading.vue";
import Icon from "../Icon/Icon.vue";

export default {
  name: "OCalendar",
  components: {
    [Heading.name]: Heading,
    [Icon.name]: Icon
  },
  props: {
    minDate: [String, Date],
    maxDate: [String, Date],
    value: [String, Date]
  },
  setup(props, { emit, root }) {
    const { isPopperOpen, refTrigger, refDropdown, toggle, close } = usePopper(
      root,
      {
        offset: [0, 10],
        placement: "bottom"
      }
    );

    const state = reactive({
      newValue: props.value ? props.value : new Date(),
      year: props.value ? props.value.getFullYear() : new Date().getFullYear(),
      month: props.value
        ? props.value.getMonth() + 1
        : new Date().getMonth() + 1,
      day: props.value ? props.value.getDate() : new Date().getDate(),
      showMonths: false
    });

    const computedValue = computed({
      get: () => {
        if (props.value instanceof Date) {
          return props.value;
        } else {
          return props.value ? new Date(props.value) : new Date();
        }
      }
    });

    const computedMinDate = computed(() => {
      if (!props.minDate) return null;

      return props.minDate instanceof Date
        ? props.minDate
        : new Date(props.minDate);
    });

    const computedMaxDate = computed(() => {
      if (!props.maxDate) return null;

      return props.maxDate instanceof Date
        ? props.maxDate
        : new Date(props.maxDate);
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

    const months = computed(() =>
      _monthLabels.map((monthLabel, i) => ({
        label: monthLabel,
        label_1: monthLabel.substring(0, 1),
        label_2: monthLabel.substring(0, 2),
        label_3: monthLabel.substring(0, 3),
        isDisabled: isMonthDisabled(i),
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
          const dayDate = new Date(year, month - 1, day);
          const isSelected =
            computedValue.value.toDateString() === dayDate.toDateString();
          const isBeforeMinDate = computedMinDate.value
            ? computedMinDate.value > dayDate
            : false;
          const isAfterMaxDate = computedMaxDate.value
            ? dayDate > computedMaxDate.value
            : false;
          week.push({
            label: day && thisMonth ? day.toString() : "",
            day,
            weekday: d,
            week: w,
            month,
            year,
            date: dayDate,
            beforeMonth: previousMonth,
            afterMonth: nextMonth,
            inMonth: thisMonth,
            isDisabled: isBeforeMinDate || isAfterMaxDate || !thisMonth,
            isToday:
              day === _todayComps.day &&
              month === _todayComps.month &&
              year === _todayComps.year,
            isSelected,
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
    };

    const movePrevMonth = () => {
      const { month, year } = previousMonthComps.value;
      state.month = month;
      state.year = year;
    };

    const moveNextYear = () => {
      state.year++;
      if (!computedMaxDate.value) return;
      selectMonth(computedMaxDate.value.getMonth() + 1);
    };

    const movePrevYear = () => {
      state.year--;
      if (!computedMinDate.value) return;
      selectMonth(computedMinDate.value.getMonth() + 1);
    };

    const selectMonth = month => {
      state.month = month;
      close();
    };

    const seletDay = day => {
      emit("input", day.date);
      emit("select", day.date);
    };

    // header year
    const showNextYear = computed(() => {
      if (!computedMaxDate.value) return true;

      const maxYear = computedMaxDate.value.getFullYear();
      return state.year + 1 <= maxYear;
    });

    const showPrevYear = computed(() => {
      if (!computedMinDate.value) return true;

      const minYear = computedMinDate.value.getFullYear();
      return state.year - 1 >= minYear;
    });

    // Header month
    const showNextMonth = computed(() => {
      if (!computedMaxDate.value) return true;
      let year = state.year;
      let nextMonth = monthIndex.value + 1;
      if (nextMonth > 12) {
        year++;
        nextMonth = 1;
      }
      const maxDate = computedMaxDate.value;
      const nextMonthDate = new Date(year, nextMonth, maxDate.getDate());
      return nextMonthDate <= maxDate;
    });

    const showPrevMonth = computed(() => {
      if (!computedMinDate.value) return true;
      let year = state.year;
      let prevMonth = monthIndex.value - 1;

      if (prevMonth < 1) {
        year--;
        prevMonth = 12;
      }

      const minDate = computedMinDate.value;
      const prevMonthDate = new Date(
        year,
        prevMonth,
        minDate.getDate(),
        23,
        59
      );
      return prevMonthDate >= minDate;
    });

    const isMonthDisabled = month => {
      return getIsMonthBeforeMin(month) || getIsMonthAfterMax(month);
    };

    const getIsMonthBeforeMin = month => {
      if (!computedMinDate.value) return false;
      let year = state.year;

      const minDate = computedMinDate.value;
      const monthDate = new Date(year, month, minDate.getDate(), 23, 59);
      return monthDate <= minDate;
    };

    const getIsMonthAfterMax = month => {
      if (!computedMaxDate.value) return false;
      let year = state.year;

      const maxDate = computedMaxDate.value;
      const monthDate = new Date(year, month, maxDate.getDate());
      return monthDate >= maxDate;
    };

    return {
      // Popper
      toggle,
      isPopperOpen,
      refTrigger,
      refDropdown,
      // Local
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
      movePrevMonth,
      moveNextYear,
      movePrevYear,
      selectMonth,
      seletDay,
      // Year header
      showNextYear,
      showPrevYear,
      // Month header
      showNextMonth,
      showPrevMonth
    };
  }
};
</script>
