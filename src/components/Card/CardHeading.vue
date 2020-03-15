<template functional>
  <div class="octo-card__accent">
    <o-h size="4" type="is-inherit" :truncateLines="props.truncate">
      <slot />
    </o-h>
  </div>
</template>

<script>
export const CardHeading = {
  name: "OCardHeading",
  props: {
    truncate: {
      default: 0,
      type: [String, Number]
    }
  }
};

export default CardHeading;
</script>
