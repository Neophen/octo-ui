<template>
  <div class="octo-switch__container">
    <input
      type="checkbox"
      :id="computedName"
      class="octo-switch"
      v-model="isChecked"
    />
    <label class="octo-switch__label" :for="computedName">
      {{ computedName }}
    </label>
  </div>
</template>

<script>
import { reactive, toRefs, watch, computed } from "@vue/composition-api";

import { generateID } from "../../utils/id-generator.js";

export default {
  name: "o-switch",
  inheritAttrs: false,
  props: {
    value: [Boolean, String],
    name: {
      type: String,
      default: null
    },
    nativeName: {
      type: String,
      default: null
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isChecked: props.value
    });

    const computedName = computed(() => {
      return props.name ? props.name : generateID();
    });

    watch(
      () => state.isChecked,
      isChecked => {
        emit("input", isChecked);
      },
      { lazy: true }
    );

    watch(
      () => props.value,
      isChecked => {
        state.isChecked = isChecked;
      }
    );

    return { ...toRefs(state), computedName };
  }
};
</script>
