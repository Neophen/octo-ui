<template>
  <portal v-if="active" to="octo-modals" slim>
    <div
      :key="modalHash"
      class="octo-modal__overlay"
      :class="{ 'is-clickable': !preventClickOutside }"
    >
      <div class="octo-modal__inner">
        <div class="octo-modal__spacer"></div>
        <div class="octo-modal__content">
          <div ref="refContainer" class="octo-modal-box__container">
            <slot :cancel="cancel" :success="success" />
          </div>
        </div>
        <div class="octo-modal__spacer"></div>
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
  onMounted,
  ref,
  onBeforeUnmount
} from "@vue/composition-api";

import { generateID } from "../../utils/id-generator.js";

export default {
  name: "OModal",
  props: {
    name: String,
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
  setup(props, { emit }) {
    const refContainer = ref(null);

    const state = reactive({
      isAnotherModalOpen: false,
      previousHash: ""
    });

    const modalHash = computed(() =>
      props.name ? `#${props.name}` : `#modal-${generateID()}`
    );

    const close = event => {
      emit("update:active", false);
      event && emit(event);
    };

    const cancel = () => close("cancel");
    const success = () => close("success");

    const clickOutside = () => {
      if (window.location.hash !== modalHash.value) return;
      if (props.preventClickOutside) return;

      close("cancel");
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

    const escapeHandler = event => {
      if (event.key === "Escape") {
        clickOutside();
      }
    };

    const handleGlobalClick = event => {
      if (!refContainer.value) return;

      const clickedInside = refContainer.value.contains(event.target);

      if (!clickedInside) {
        clickOutside();
        return;
      }
    };

    onMounted(() => {
      window.addEventListener("click", handleGlobalClick, true);
      window.addEventListener("keydown", escapeHandler, true);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", handleGlobalClick, true);
      window.removeEventListener("keydown", escapeHandler, true);
    });

    return {
      ...toRefs(state),
      refContainer,
      modalHash,
      cancel,
      success
    };
  }
};
</script>
