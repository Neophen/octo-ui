<template>
  <div class="octo-switch__container">
    <input
      type="checkbox"
      :id="name"
      :name="name"
      class="octo-switch"
      v-model="isChecked"
    />
    <label class="octo-switch__label" :for="name">{{ name }}</label>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "@vue/composition-api";
export default {
  name: "o-switch",
  inheritAttrs: false,
  props: {
    value: [Boolean, String],
    name: {
      type: String,
      default: "octo-switch"
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isChecked: props.value
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

    return { ...toRefs(state) };
  }
};
</script>
