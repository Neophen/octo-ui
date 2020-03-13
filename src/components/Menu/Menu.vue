<template>
  <nav class="octo-menu">
    <o-menu-item v-for="(item, i) in items" :item="item" :key="i" />
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "OMenu",
  components: {
    [MenuItem.name]: MenuItem
  },
  props: {
    items: Array
  }
};
</script>
