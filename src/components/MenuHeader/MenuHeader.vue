<template>
  <div class="octo-menu-header">
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
      default: "v.1"
    }
  }
};
</script>
