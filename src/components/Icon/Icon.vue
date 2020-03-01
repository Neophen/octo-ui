<template>
  <svg class="octo-icon" :class="iconSize" :style="iconRotation">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "o-icon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: null,
      validator: value => {
        if (!value) return;
        return ["sm", "md", "lg", "xl"].includes(value);
      }
    },
    dir: {
      type: String,
      default: "right",
      validator: value => {
        return ["up", "left", "right", "down"].includes(value);
      }
    },
    pack: {
      type: String,
      default: "dashboard"
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

    const iconSize = computed(() => (props.size ? `is-${props.size}` : null));

    return { iconPath, iconRotation, iconSize };
  }
};
</script>
