<template functional>
  <div
    class="octo-card__title has-accent"
    :class="[data.class, data.staticClass]"
  >
    <o-h size="4" type="is-inherit" :truncateLines="props.truncate">
      <slot />
    </o-h>
  </div>
</template>

<script>
export const CardHeading = {
  name: "OCardHeading",
  inheritAttrs: false,
  props: {
    truncate: {
      default: 3,
      type: [String, Number]
    }
  }
};

export default CardHeading;
</script>
