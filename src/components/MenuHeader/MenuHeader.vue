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
export default {
  name: "OMenuHeader",
  props: {
    version: {
      type: String,
      default: "v-1.0"
    },
    type: {
      type: String,
      default: "is-default",
      validator(value) {
        const items = [
          "is-default",
          "is-primary",
          "is-danger",
          "is-muted",
          "is-inverted",
          "is-custom"
        ];
        const isValid = items.includes(value);
        if (!isValid) {
          const message = `[Vue warn]: <OMenuHeader> type "${value}", is not a valid type`;
          console.error(message);
        }

        return isValid;
      }
    }
  }
};
</script>
