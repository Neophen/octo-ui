<template>
  <o-dropdown-menu type="is-primary">
    <button slot="trigger" class="octo-card__settings">
      <o-icon icon="gear" size="is-md" />
    </button>
    <o-dropdown-menu-item
      v-for="(item, i) in items"
      :key="i"
      @click="item.action"
      :type="item.type ? item.type : 'is-default'"
    >
      {{ item.label }}
    </o-dropdown-menu-item>
  </o-dropdown-menu>
</template>

<script>
export default {
  name: "OCardSettings",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
