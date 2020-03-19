import { reactive, toRefs, ref, onBeforeUnmount } from "@vue/composition-api";

import { createPopper } from "@popperjs/core";

const baseConfig = {
  offset: [0, 0],
  placement: "bottom",
  shouldTimeout: false,
  time: 200
};

export const usePopper = (root, setupConfig = baseConfig) => {
  const config = {
    ...baseConfig,
    ...setupConfig
  };
  const refTrigger = ref(null);
  const refDropdown = ref(null);
  const refContainer = ref(null);

  const state = reactive({
    popper: null,
    destroyPopperTimeout: null,
    isPopperOpen: false
  });

  const isElement = element =>
    element instanceof Element || element instanceof HTMLDocument;

  const getElement = reference =>
    isElement(reference.value) ? reference.value : reference.value.$el;

  const checkAndGetElement = reference =>
    reference.value ? getElement(reference) : null;

  const setupPopper = () => {
    root.$nextTick(() => {
      let reference = checkAndGetElement(refTrigger);
      let dropdown = checkAndGetElement(refDropdown);

      if (!reference || !dropdown) {
        // we try another loop just in-case
        root.$nextTick(() => {
          let reference = checkAndGetElement(refTrigger);
          let dropdown = checkAndGetElement(refDropdown);

          if (!reference || !dropdown) {
            state.isPopperOpen = false;
            return;
          }
          initPopper(reference, dropdown);
        });
      } else {
        initPopper(reference, dropdown);
      }
    });
  };

  const initPopper = (reference, dropdown) => {
    state.popper = createPopper(reference, dropdown, {
      placement: config.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: config.offset
          }
        }
      ]
    });
  };

  const setupPopperWithTimeout = () => {
    if (state.destroyPopperTimeout) {
      clearTimeout(state.destroyPopperTimeout);
      state.destroyPopperTimeout = null;
    }
    setupPopper();
  };

  const destroyPopper = () => {
    if (state.popper) {
      state.popper.destroy();
      state.popper = null;
      state.destroyPopperTimeout = null;
    }
  };

  const destroyPopperWithTimeout = (time = config.time) => {
    if (state.popper) {
      state.destroyPopperTimeout = setTimeout(destroyPopper, time);
    }
  };

  const handleGlobalClick = event => {
    const targetInContainer = refContainer.value
      ? getElement(refContainer).contains(event.target)
      : false;

    const targetInDropdown = refDropdown.value
      ? getElement(refDropdown).contains(event.target)
      : false;

    requestAnimationFrame(() => {
      const isCloseMenuDirective = event.closeOctoMenu && targetInDropdown;
      if (isCloseMenuDirective) {
        close();
        return;
      }

      const isOutsideBounds = !targetInContainer && !targetInDropdown;
      if (isOutsideBounds) {
        close();
        return;
      }
    });
  };

  const open = () => {
    if (state.isPopperOpen) return;
    state.isPopperOpen = true;
    config.shouldTimeout ? setupPopperWithTimeout() : setupPopper();

    window.addEventListener("click", handleGlobalClick, true);
  };

  const close = () => {
    if (!state.isPopperOpen) return;
    state.isPopperOpen = false;
    config.shouldTimeout ? destroyPopperWithTimeout() : destroyPopper();

    window.removeEventListener("click", handleGlobalClick, true);
  };

  const toggle = () => (state.isPopperOpen ? close() : open());

  onBeforeUnmount(() => {
    if (state.destroyPopperTimeout) {
      destroyPopperWithTimeout();
    } else {
      destroyPopper();
    }
    window.removeEventListener("click", handleGlobalClick, true);
  });

  return {
    ...toRefs(state),
    refTrigger,
    refDropdown,
    refContainer,
    open,
    close,
    toggle
  };
};
