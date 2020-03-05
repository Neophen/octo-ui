<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="octo-text"
    :class="[props.type, props.size, data.class, data.staticClass]"
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
    type: [String, Object],
    size: {
      default: "is-default",
      type: String,
      validator: value =>
        ["is-default", "is-xs", "is-sm", "is-semi"].includes(value)
    }
  }
};

export default Text;
</script>
