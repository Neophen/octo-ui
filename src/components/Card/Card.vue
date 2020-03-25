<template>
  <div class="octo-card" :class="[type]">
    <div class="octo-card__media">
      <slot name="media" />
    </div>
    <div class="octo-card__content">
      <button class="octo-card__underlay-btn" @click="$emit('click')"></button>
      <slot />

      <div
        v-if="hasSettingsSlot"
        @click.stop
        class="octo-card__settings-container"
      >
        <slot name="settings" />
      </div>

      <div class="octo-card__footer">
        <slot name="footer" />
      </div>

      <button
        v-if="action"
        class="octo-card__action has-accent is-muted-primary"
        @click="$emit('click')"
      >
        <o-h size="4" type="is-inherit" class="octo-card__action-label">
          <span class="is-underline">{{ action }}</span> &gt;
          <!-- <o-icon icon="arrow-collapse" class="octo-card__action-icon" /> -->
        </o-h>
      </button>
    </div>
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
