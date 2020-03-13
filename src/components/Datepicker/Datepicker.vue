<template>
  <div
    ref="refContainer"
    class="octo-datepicker"
    :class="[size, { 'is-expanded': expanded }]"
  >
    <o-input
      ref="refTrigger"
      autocomplete="off"
      :value="formatedValue"
      :placeholder="placeholder"
      :readonly="true"
      v-bind="$attrs"
      icon-right="calendar"
      @keyup.native.enter="openCalendar"
      @click.native="toggleCalendar"
    />
    <portal v-if="showCalendar" to="octo-datepicker" slim>
      <div ref="refDropdown" class="octo-datepicker__dropdown">
        <o-calendar
          v-model="computedValue"
          @select="closeCalendar"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </div>
    </portal>
  </div>
</template>

<script>
import FormElementMixin from "../../utils/FormElementMixin";
import config from "../../utils/config";

import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";

import { _monthLabels } from "../../utils/CalendarData.js";

import { reactive, toRefs, computed } from "@vue/composition-api";
import { usePopper } from "../../utils/usePopper";

export default {
  name: "ODatepicker",
  components: {
    [Input.name]: Input,
    [Calendar.name]: Calendar
  },
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: Date
    },
    firstDayOfWeek: {
      type: Number,
      default: () => {
        if (typeof config.defaultFirstDayOfWeek === "number") {
          return config.defaultFirstDayOfWeek;
        } else {
          return 0;
        }
      }
    },
    minDate: Date,
    maxDate: Date,
    placeholder: String
  },
  setup(props, { emit, root }) {
    const {
      isPopperOpen: showCalendar,
      refContainer,
      refTrigger,
      refDropdown,
      open: openCalendar,
      close
    } = usePopper(root, {
      offset: [0, 10],
      placement: "bottom-start"
    });

    const state = reactive({
      newValue: props.value
    });

    const computedValue = computed({
      get() {
        return state.newValue;
      },
      set(value) {
        state.newValue = value;
        emit("input", value);
      }
    });

    const toggleCalendar = () => {
      showCalendar.value ? closeCalendar() : openCalendar();
    };

    const closeCalendar = () => {
      refTrigger.value.focus();
      close();
    };

    const formatedValue = computed(() => {
      if (!computedValue.value) return null;
      const date = computedValue.value;
      return `${date.getDate()} ${_monthLabels[date.getMonth()].substring(
        0,
        3
      )} ${date.getFullYear()}`;
    });

    return {
      ...toRefs(state),
      refTrigger,
      refDropdown,
      refContainer,
      showCalendar,
      toggleCalendar,
      openCalendar,
      closeCalendar,
      computedValue,
      formatedValue
    };
  }
};
</script>
