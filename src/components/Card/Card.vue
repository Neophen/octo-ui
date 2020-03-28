<template>
  <div class="octo-card" :class="[type]">
    <div v-if="$slots.media" class="octo-card__media">
      <button
        class="octo-card__underlay-btn is-media"
        @click="$emit('click')"
        type="button"
      ></button>
      <slot name="media" />
    </div>
    <div class="octo-card__content">
      <button
        class="octo-card__underlay-btn"
        @click="$emit('click')"
        type="button"
      ></button>
      <div v-if="$slots.settings" @click.stop class="octo-card__settings">
        <slot name="settings" />
      </div>

      <div class="__content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="__footer">
        <slot name="footer" />
      </div>
    </div>
    <button
      v-if="action"
      class="octo-card__action has-accent is-muted-primary"
      @click="$emit('click')"
      type="button"
    >
      <o-h size="4" type="is-inherit" class="octo-card__action-label">
        <span class="is-underline">{{ action }}</span> &gt;
        <!-- <o-icon icon="arrow-collapse" class="octo-card__action-icon" /> -->
      </o-h>
    </button>
  </div>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator.js";

export default {
  name: "OCard",
  props: {
    ...typeValidator("type", ["is-default", "is-dashed"], "OCard"),
    action: String
  },
  computed: {
    hasSettingsSlot() {
      return !!this.$slots.settings;
    }
  }
};
</script>
