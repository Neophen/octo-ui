<template>
  <svg class="octo-icon" :class="`is-${size}`" :style="iconRotation">
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
      default: "custom",
      validator: value => {
        if (!value) return;
        return ["sm", "md", "lg", "xl", "custom"].includes(value);
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

    return { iconPath, iconRotation };
  }
};
</script>
