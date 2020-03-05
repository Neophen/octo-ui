<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="octo-text"
    :class="[
      `is-${props.type}`,
      `is-${props.size}`,
      data.class,
      data.staticClass
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export const Text = {
  name: "OText",
  props: {
    tag: {
      default: "p",
      type: String,
      validator(value) {
        const tags = ["p", "span"];
        return tags.includes(value);
      }
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
    },
    size: {
      default: "default",
      type: String,
      validator(value) {
        const types = ["default", "xs", "sm", "semi"];
        return types.includes(value);
      }
    }
  }
};

export default Text;
</script>
