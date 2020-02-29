<template functional>
  <p
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
  </p>
</template>

<script>
export const Text = {
  name: "o-p",
  props: {
    type: {
      default: "default",
      type: String,
      validator(value) {
        const types = [
          "is-default",
          "is-muted",
          "is-primary",
          "is-error",
          "is-inverted",
          "is-inherit"
        ];
        return types.includes(`is-${value}`);
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
