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
        const isValid = tags.includes(value);
        if (!isValid) {
          const message = `[Vue warn]: <OText> tag "${value}", is not a valid tag`;
          console.error(message);
        }

        return isValid;
      }
    },
    type: {
      type: [String, Object],
      default: "is-default"
    },
    size: {
      type: String,
      default: "is-default"
    }
  }
};

export default Text;
</script>
