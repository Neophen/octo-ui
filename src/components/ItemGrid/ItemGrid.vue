<template>
  <div class="octo-col-grid" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import {
  getCurrentInstance,
  computed,
  reactive,
  onUpdated
} from "@vue/composition-api";
export default {
  name: "OItemGrid",

  setup() {
    const instance = getCurrentInstance();

    const state = reactive({
      children: instance.$children
    });

    onUpdated(() => {
      state.children = instance.$children;
    });

    const columnStyle = count =>
      `grid-template-columns: repeat( ${count}, ${count > 3 ? "1fr" : "25%"});`;

    const style = computed(() => {
      if (state.children.length < 5) {
        return columnStyle(1);
      }
      if (state.children.length < 9) {
        return columnStyle(2);
      }
      if (state.children.length < 13) {
        return columnStyle(3);
      } else {
        return columnStyle(4);
      }
    });

    return { style };
  }
};
</script>
