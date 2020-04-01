<template>
  <li>
    <o-button v-bind="$attrs" v-on="$listeners" v-close-menu>
      <slot />
    </o-button>
  </li>
</template>

<script>
export default {
  name: "ODropdownMenuItem",
  inheritAttrs: false,
};
</script>
