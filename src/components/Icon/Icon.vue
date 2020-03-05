<template>
  <svg class="octo-icon" :class="[size, type]" :style="iconRotation">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "OIcon",
  props: {
    type: [String, Object],
    pack: {
      type: String,
      default: "dashboard"
    },
    icon: String,
    size: {
      type: String,
      default: "is-custom",
      validator: value =>
        [
          "is-sm",
          "is-small",
          "is-medium",
          "is-md",
          "is-large",
          "is-lg",
          "is-xl",
          "is-custom",
          "is-undefined"
        ].includes(value)
    },
    dir: {
      type: String,
      default: "right",
      validator: value => {
        return ["up", "left", "right", "down"].includes(value);
      }
    }
  },
  setup(props, { root }) {
    const iconPath = computed(() => {
      return `${root.$octoIconPacks[props.pack]}#${props.icon}`;
    });

    const rotations = {
      up: "270deg",
      right: "0deg",
      left: "180deg",
      down: "90deg"
    };

    const iconRotation = computed(() => {
      return `transform: rotateZ(${rotations[props.dir]});`;
    });

    return { iconPath, iconRotation };
  }
};
</script>
