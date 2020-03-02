<template functional>
  <component
    :is="`h${props.size}`"
    :ref="data.ref"
    class="octo-title"
    :class="[
      `is-${props.size}`,
      `is-${props.type}`,
      data.class,
      data.staticClass
    ]"
    :style="[
      data.style,
      data.staticStyle,
      props.truncateLines > 0
        ? {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            //height: `calc(${[2.5,1.875,1.25,1.125,0.875][props.size] * 1.6}rem * ${props.truncateLines})`,
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': props.truncateLines
          }
        : {}
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export const Heading = {
  name: "o-h",
  props: {
    size: {
      default: "1",
      type: String,
      validator(value) {
        return ["1", "2", "3", "4", "5"].includes(value);
      }
    },
    truncateLines: {
      default: 0,
      type: Number
    },
    type: {
      default: "default",
      type: String,
      validator(value) {
        const types = [
          "default",
          "muted",
          "primary",
          "danger",
          "inverted",
          "inherit"
        ];
        return types.includes(value);
      }
    }
  }
};

export default Heading;
</script>
