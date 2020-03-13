<template>
  <o-dropdown-menu type="is-primary">
    <button slot="trigger" class="octo-card__accent-muted">
      <o-icon icon="gear" size="is-md" />
    </button>
    <o-dropdown-menu-item
      v-for="(action, i) in actions"
      :key="i"
      @click="$emit(action.action)"
      :type="action.type ? action.type : 'is-default'"
    >
      {{ action.label }}
    </o-dropdown-menu-item>
  </o-dropdown-menu>
</template>

<script>
export default {
  name: "OCardSettings",
  props: {
    actions: {
      type: Array,
      required: true
    }
  }
};
</script>
