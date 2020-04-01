<template>
  <o-dropdown-menu type="is-primary">
    <button
      v-bind="$attrs"
      slot="trigger"
      class="has-accent is-muted is-hoverable"
      type="button"
    >
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
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
