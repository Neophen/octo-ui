<template>
  <div class="octo-item-grid" :style="style">
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
  props: {
    colFirst: {
      type: Boolean,
      default: false
    },
    height: [String, Number],
    minWidth: {
      type: [String, Number],
      default: "280px"
    }
  },

  setup(props) {
    const instance = getCurrentInstance();

    const state = reactive({
      children: instance.$children
    });

    onUpdated(() => {
      state.children = instance.$children;
    });

    const columnStyle = count =>
      `grid-template-columns: repeat( ${count}, ${count > 2 ? "1fr" : "25%"});`;

    const getColumnStyles = () => {
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
    };

    const style = computed(() => {
      const styles = [];
      if (props.colFirst) {
        styles.push(getColumnStyles());
      } else {
        const cols = `grid-template-columns: repeat(auto-fill, minmax(${props.minWidth}, 1fr));`;
        styles.push(cols);
      }

      if (props.height) {
        const rows = `grid-auto-rows: minmax(${props.height}, auto);`;
        styles.push(rows);
      }

      return styles.join(" ");
    });

    return { style };
  }
};
</script>
