<template>
  <div class="octo-card" :class="[type]">
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

    <div class="octo-card__action">
      <slot name="action">
        <div v-if="action" class="has-accent is-muted-primary">
          <o-h size="4" type="is-inherit" class="octo-card__action-label">
            <span class="is-underline">{{ action }}</span>
            <o-icon icon="arrow-collapse" class="octo-card__action-icon" />
          </o-h>
        </div>
      </slot>
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
