<template>
  <o-dropdown-menu class="octo-label-select">
    <button squared slot="trigger" class="octo-label-select__btn">
      <o-h size="4" type="is-inherit">
        {{ computedValue.label }}
        <o-icon icon="triangle" dir="down" class="octo-label-select__icon" />
      </o-h>
    </button>

    <o-radio
      v-for="option in options"
      :key="option.value"
      class="octo-label-select__item"
      :class="{ 'is-active': option.value === computedValue.value }"
      v-model="computedValue"
      :native-value="option"
      v-close-menu
    >
      {{ option.label }}
    </o-radio>
  </o-dropdown-menu>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "OLabelSelect",
  props: {
    value: [String, Object],
    options: {
      type: [Array, Object]
    },
    placeholder: {
      type: String,
      default: "Please select an option..."
    }
  },
  setup(props, { emit }) {
    const computedValue = computed({
      get() {
        return props.value
          ? props.value
          : { label: props.placeholder, value: "placeholder" };
      },
      set(value) {
        emit("input", value);
      }
    });

    return { computedValue };
  }
};
</script>
