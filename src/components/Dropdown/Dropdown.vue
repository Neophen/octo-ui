<template>
  <div class="octo-dropdown">
    <div
      ref="refButton"
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
        :class="`is-${type}`"
      >
        <slot v-bind:closeMenu="close" />
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
  ref
} from "@vue/composition-api";

import { createPopper } from "@popperjs/core";

export default {
  name: "o-dropdown",
  props: {
    type: {
      type: String,
      default: "default",
      validator: value => {
        return ["default", "primary"].includes(value);
      }
    }
  },
  setup(_, { root }) {
    const refButton = ref(null);
    const refDropdown = ref(null);

    const state = reactive({
      isOpen: false,
      clickListener: null,
      destroyPopperTimeout: null
    });

    const setupPopper = () => {
      state.popper = createPopper(refButton.value, refDropdown.value, {
        placement: "bottom-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [-7, 7]
            }
          }
        ]
      });
    };

    const destroyPopper = () => {
      if (state.popper) {
        state.destroyPopperTimeout = setTimeout(function() {
          state.popper.destroy();
          state.popper = null;
          state.destroyPopperTimeout = null;
        }, 200);
      }
    };

    const closeOnClickOutside = event => {
      if (!event.target.closest(".octo-dropdown")) {
        state.isOpen = false;
      }
    };

    const toggle = () => {
      if (state.isOpen) {
        state.isOpen = false;
        destroyPopper();
      } else {
        state.isOpen = true;
        if (state.destroyPopperTimeout) {
          clearTimeout(state.destroyPopperTimeout);
          state.destroyPopperTimeout = null;
        }
        root.$nextTick(() => {
          setupPopper();
        });
      }
    };

    const close = () => {
      state.isOpen = false;
      destroyPopper();
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

    onBeforeUnmount(() => {
      if (state.clickListener) {
        document.removeEventListener("click", state.clickListener);
        state.clickListener = null;
      }
      destroyPopper();
    });

    return { ...toRefs(state), refButton, refDropdown, toggle, close };
  }
};
</script>
