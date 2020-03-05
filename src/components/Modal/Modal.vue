<template>
  <portal to="octo-modals" slim>
    <div v-if="active" :key="modalHash" class="octo-modal__overlay">
      <button
        @mousedown="clickOutside"
        class="octo-modal__overlay-close"
      ></button>
      <div @click.stop class="octo-modal__content">
        <slot v-bind:cancel="cancel" v-bind:success="success"></slot>
      </div>
    </div>
  </portal>
</template>

<script>
import {
  computed,
  watch,
  reactive,
  toRefs,
  onMounted
} from "@vue/composition-api";

import { generateID } from "../../utils/id-generator.js";

export default {
  name: "o-modal",
  props: {
    name: {
      type: String,
      default: null
    },
    preventClickOutside: {
      type: Boolean,
      default: false
    },
    preventScrolling: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit, root }) {
    const state = reactive({
      isAnotherModalOpen: false,
      previousHash: ""
    });

    const modalHash = computed(() =>
      props.name ? `#${props.name}` : `#modal-${generateID()}`
    );

    const close = message => {
      emit("update:active", false);
      message && emit(message);
    };

    const cancel = () => close("cancel");
    const success = () => close("success");
    const clickOutside = () => {
      !props.preventClickOutside && close("cancel");
    };

    const changeHash = hash => {
      if (history) {
        history.replaceState(undefined, undefined, hash);
      } else {
        window.location.hash = hash;
      }
    };

    const manageModalHash = active => {
      if (active) {
        state.previousHash = window.location.hash;
        changeHash(modalHash.value);
      } else {
        changeHash(state.previousHash);
      }
    };

    const setOtherModalActive = active => {
      if (active) {
        state.isAnotherModalOpen = document.body.classList.contains(
          "octo-modal__stop-scroll"
        );
      }
    };

    watch(
      () => props.active,
      active => {
        manageModalHash(active);
        setOtherModalActive(active);
        if (!props.preventScrolling) return;

        if (active) {
          document.body.classList.add("octo-modal__stop-scroll");
        } else if (!state.isAnotherModalOpen) {
          document.body.classList.remove("octo-modal__stop-scroll");
        }
      },
      { lazy: true }
    );

    onMounted(() => {
      const escapeHandler = e => {
        if (e.key === "Escape") {
          if (window.location.hash === modalHash.value) {
            clickOutside();
          }
        }
      };

      document.addEventListener("keydown", escapeHandler);

      root.$once("hook:destroyed", () => {
        document.removeEventListener("keydown", escapeHandler);
      });
    });

    return { ...toRefs(state), modalHash, cancel, success, clickOutside };
  }
};
</script>
