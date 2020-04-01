<template>
  <div ref="refContainer" class="octo-dropdown">
    <div
      ref="refTrigger"
      class="octo-dropdown__trigger"
      @click.prevent="toggle"
      aria-haspopup="true"
      :aria-expanded="isPopperOpen"
    >
      <slot name="trigger" />
    </div>
    <portal v-if="isPopperOpen" to="octo-popups" slim>
      <transition name="octo-fade-out-quick">
        <ul ref="refDropdown" class="octo-dropdown__menu" :class="type">
          <slot />
        </ul>
      </transition>
    </portal>
  </div>
</template>

<script>
import { usePopper } from "../../utils/usePopper.js";
import { typeValidator } from "../../utils/typeValidator";

export default {
  name: "ODropdownMenu",
  props: {
    ...typeValidator("type", ["is-default", "is-primary"], "ODropdownMenu"),
  },
  setup() {
    const {
      isPopperOpen,
      refTrigger,
      refDropdown,
      refContainer,
      toggle,
      close,
    } = usePopper({
      offset: [-7, 7],
      placement: "bottom-start",
      shouldTimeout: true,
      time: 200,
    });

    return {
      isPopperOpen,
      refTrigger,
      refContainer,
      refDropdown,
      toggle,
      close,
    };
  },
};
</script>
