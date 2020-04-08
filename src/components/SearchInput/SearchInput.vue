<template>
  <div class="octo-control">
    <input
      type="text"
      class="input octo-search-input"
      :value="value"
      @input="e => $emit('input', e.target.value)"
      :placeholder="placeholder"
      @keyup.esc="() => $emit('input', '')"
    />
    <div class="h-full octo-input__icon-container is-left is-large">
      <o-icon icon="search" size="is-lg" />
    </div>
    <div
      v-if="value"
      class="h-full octo-input__icon-container is-right is-large has-text show-on-focus"
    >
      <o-text type="is-muted">Press ‘ESC’ to cancel</o-text>
      <o-icon icon="close" size="is-lg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OSearchInput",
  props: {
    value: {
      type: null,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search...",
    },
  },
  setup() {},
};
</script>
