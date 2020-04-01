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
import { typeValidator } from "../../utils/typeValidator";

export const Text = {
  name: "OText",
  props: {
    ...typeValidator("tag", ["p", "span"], "OText"),
    type: {
      type: [String, Object],
      default: "is-default",
    },
    ...typeValidator(
      "size",
      ["is-initial", "is-semi", "is-tiny", "is-xs", "is-sm"],
      "OText",
    ),
  },
};

export default Text;
</script>
