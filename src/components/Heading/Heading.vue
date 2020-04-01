<template functional>
  <component
    :is="`h${props.size}`"
    :ref="data.ref"
    class="octo-title"
    :class="[`is-${props.size}`, props.type, data.class, data.staticClass]"
    :style="[
      data.style,
      data.staticStyle,
      Number(props.truncateLines) > 0
        ? {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            //height: `calc(${[2.5,1.875,1.25,1.125,0.875][props.size] * 1.6}rem * ${props.truncateLines})`,
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': props.truncateLines,
          }
        : {},
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator";

export const Heading = {
  name: "OH",
  props: {
    ...typeValidator("size", ["1", "2", "3", "4", "5"], "OHeading"),
    truncateLines: {
      default: 0,
      type: [Number, String],
    },
    type: [String, Object],
  },
};

export default Heading;
</script>
