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
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      isActive: false,
    });

    const kebabCase = str =>
      str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        .map(x => x.toLowerCase())
        .join("-");

    const type = props.value ? props.value : kebabCase(props.name);

    onMounted(() => {
      state.isActive = props.selected;
    });

    return { ...toRefs(state), type };
  },
};
</script>
