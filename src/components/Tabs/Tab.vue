<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "@vue/composition-api";

export default {
  name: "OTab",
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup({ selected, name }) {
    const state = reactive({
      isActive: false
    });

    const kebabCase = str =>
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map(x => x.toLowerCase())
        .join("-");

    const type = kebabCase(name);

    onMounted(() => {
      state.isActive = selected;
    });

    return { ...toRefs(state), type };
  }
};
</script>
