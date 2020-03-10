<template>
  <div ref="refContainer" class="octo-dropdown">
    <div
      ref="refTrigger"
      class="octo-dropdown__trigger"
      @click.prevent="toggle"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger" />
    </div>
    <transition name="octo-fade-out-quick">
      <ul
        ref="refDropdown"
        v-show="isOpen"
        class="octo-dropdown__menu"
        :class="type"
      >
        <slot />
      </ul>
    </transition>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  watch,
  onBeforeUnmount,
  ref,
  onMounted
} from "@vue/composition-api";

import { usePopper } from "../../utils/usePopper.js";

export default {
  name: "ODropdown",
  props: {
    type: {
      type: String,
      default: "is-default",
      validator: value => ["is-default", "is-primary"].includes(value)
    }
  },
  setup(_, { root }) {
    const {
      setupPopperWithTimeout,
      destroyPopperWithTimeout,
      refTrigger,
      refDropdown
    } = usePopper(root);

    const popperOffset = [-7, 7];
    const popperPlacement = "bottom-start";

    const refContainer = ref(null);

    const state = reactive({
      isOpen: false,
      clickListener: null
    });

    const closeOnClickOutside = event => {
      if (!event.target.closest(".octo-dropdown")) {
        state.isOpen = false;
      }
    };

    const toggle = () => (state.isOpen ? close() : open());

    const open = () => {
      state.isOpen = true;
      setupPopperWithTimeout(popperOffset, popperPlacement);
    };

    const close = () => {
      state.isOpen = false;
      destroyPopperWithTimeout(200);
    };

    watch(
      () => state.isOpen,
      isOpen => {
        if (isOpen) {
          state.clickListener = document.addEventListener(
            "click",
            closeOnClickOutside
          );
        }
      }
    );

    const handleGlobalClick = event => {
      const containedInDropdown = refContainer.value.contains(event.target);
      const containedInMenu = refDropdown.value.contains(event.target);
      requestAnimationFrame(() => {
        if (!containedInDropdown || (event.closeOctoMenu && containedInMenu)) {
          close();
        }
      });
    };

    onMounted(() => {
      window.addEventListener("click", handleGlobalClick, true);
    });

    onBeforeUnmount(() => {
      if (state.clickListener) {
        document.removeEventListener("click", state.clickListener);
        state.clickListener = null;
      }
      close();
      window.removeEventListener("click", handleGlobalClick, true);
    });

    return {
      ...toRefs(state),
      refTrigger,
      refContainer,
      refDropdown,
      toggle,
      close
    };
  }
};
</script>
