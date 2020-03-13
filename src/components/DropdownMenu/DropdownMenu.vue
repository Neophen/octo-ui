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
    <transition name="octo-fade-out-quick">
      <ul
        ref="refDropdown"
        v-show="isPopperOpen"
        class="octo-dropdown__menu"
        :class="type"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script>
import { usePopper } from "../../utils/usePopper.js";

export default {
  name: "ODropdownMenu",
  props: {
    type: {
      type: String,
      default: "is-default",
      validator: value => ["is-default", "is-primary"].includes(value)
    }
  },
  setup(_, { root }) {
    const {
      isPopperOpen,
      refTrigger,
      refDropdown,
      refContainer,
      toggle,
      close
    } = usePopper(root, {
      offset: [-7, 7],
      placement: "bottom-start",
      shouldTimeout: true,
      time: 200
    });

    return {
      isPopperOpen,
      refTrigger,
      refContainer,
      refDropdown,
      toggle,
      close
    };
  }
};
</script>
