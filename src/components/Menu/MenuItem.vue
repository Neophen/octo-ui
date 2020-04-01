<template>
  <button
    @click.prevent="item.action"
    type="button"
    class="octo-menu-item"
    :class="{ 'is-active': item.isActive }"
  >
    <o-icon
      v-if="item.icon"
      :icon="item.icon"
      :pack="item.iconPack"
      size="is-md"
      class="octo-menu-item__icon"
    />
    <o-text type="is-inherit">{{ item.title }}</o-text>
  </button>
</template>

<script>
export default {
  name: "OMenuItem",
  props: {
    item: Object,
  },
};
</script>
