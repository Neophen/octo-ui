<template>
  <span class="octo-tag" :class="[type, size, { 'is-rounded': rounded }]">
    <span :class="{ 'has-ellipsis': ellipsis }">
      <slot />
    </span>

    <button
      type="button"
      v-if="closable"
      :aria-label="ariaCloseLabel"
      class="octo-tag__remove"
      :disabled="disabled"
      :tabindex="tabstop ? 0 : false"
      @click="close"
      @keyup.delete.prevent="close"
    >
      <o-icon icon="close" class="octo-tag__remove-icon" />
    </button>
  </span>
</template>

<script>
import Icon from "../Icon/Icon";

export default {
  name: "OTag",
  components: {
    [Icon.name]: Icon
  },
  props: {
    closable: Boolean,
    type: String,
    size: String,
    rounded: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    tabstop: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: String
  },
  methods: {
    /**
     * Emit close event when delete button is clicked
     * or delete key is pressed.
     */
    close(event) {
      if (this.disabled) return;

      this.$emit("close", event);
    }
  }
};
</script>
