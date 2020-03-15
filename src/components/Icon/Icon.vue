<template>
  <svg class="octo-icon" :class="[size, type]" :style="iconRotation">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>

<script>
import { computed } from "@vue/composition-api";
import { typeValidator } from "../../utils/typeValidator";

export default {
  name: "OIcon",
  props: {
    type: [String, Object],
    pack: {
      type: String,
      default: "dashboard"
    },
    icon: String,
    ...typeValidator(
      "size",
      [
        "is-custom",
        "is-sm",
        "is-small",
        "is-medium",
        "is-md",
        "is-large",
        "is-lg",
        "is-xl",
        "is-undefined"
      ],
      "OIcon"
    ),
    ...typeValidator("dir", ["right", "up", "left", "down"], "OIcon")
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
