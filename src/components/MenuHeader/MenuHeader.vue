<template>
  <div class="octo-menu-header" :class="[type]">
    <div class="octo-menu-header__icon">
      <slot />
    </div>
    <o-text size="is-xs" type="is-inherit" class="octo-menu-header__label">
      Runs easy on
      <strong>Octafest</strong>
      {{ version }}
    </o-text>
  </div>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator";
export default {
  name: "OMenuHeader",
  props: {
    version: {
      type: String,
      default: "v-1.0",
    },
    ...typeValidator(
      "type",
      [
        "is-default",
        "is-primary",
        "is-danger",
        "is-muted",
        "is-inverted",
        "is-custom",
      ],
      "OMenuHeader",
    ),
  },
};
</script>
