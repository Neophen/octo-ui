<template>
  <li>
    <o-button v-bind="$attrs" v-on="$listeners" v-close-menu>
      <slot />
    </o-button>
  </li>
</template>

<script>
export default {
  name: "ODropdownItem",
  inheritAttrs: false
};
</script>
