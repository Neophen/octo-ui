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
    <div
      v-if="showCalendar"
      ref="refDropdown"
      class="octo-datepicker__dropdown"
      key="octo-datepicker__dropdown"
    >
      <o-calendar
        v-model="computedValue"
        @select="closeCalendar"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </div>
  </div>
</template>

<script>
import FormElementMixin from "../../utils/FormElementMixin";
import config from "../../utils/config";

import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";

import { _monthLabels } from "../../utils/CalendarData.js";

import {
  reactive,
  toRefs,
  computed,
  onBeforeUnmount,
  ref
} from "@vue/composition-api";
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
    const { setupPopper, destroyPopper, refTrigger, refDropdown } = usePopper(
      root
    );
    const popperOffset = [0, 10];
    const popperPlacement = "bottom-start";

    const state = reactive({
      newValue: props.value,
      showCalendar: false
    });

    const refContainer = ref(null);

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
      state.showCalendar ? closeCalendar() : openCalendar();
    };

    const openCalendar = () => {
      if (state.showCalendar) return;
      state.showCalendar = true;

      setupPopper(popperOffset, popperPlacement);
      window.addEventListener("click", handleClickOutside, true);
    };

    const closeCalendar = () => {
      if (!state.showCalendar) return;
      state.showCalendar = false;
      destroyPopper();
      window.removeEventListener("click", handleClickOutside, true);
      refTrigger.value.focus();
      // refTrigger.value.$el.focus();
    };

    const formatedValue = computed(() => {
      if (!computedValue.value) return null;
      const date = computedValue.value;
      return `${date.getDate()} ${_monthLabels[date.getMonth()].substring(
        0,
        3
      )} ${date.getFullYear()}`;
    });

    const handleClickOutside = event => {
      const containedInDropdown = refContainer.value.contains(event.target);
      requestAnimationFrame(() => {
        if (!containedInDropdown) {
          closeCalendar();
        }
      });
    };

    onBeforeUnmount(() => {
      window.removeEventListener("click", handleClickOutside, true);
    });

    return {
      ...toRefs(state),
      computedValue,
      refTrigger,
      refDropdown,
      refContainer,
      formatedValue,
      toggleCalendar,
      openCalendar,
      closeCalendar
    };
  }
};
</script>
