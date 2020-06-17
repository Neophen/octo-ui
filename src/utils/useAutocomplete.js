import {
  reactive,
  toRefs,
  ref,
  watch,
  computed,
  onMounted,
  onBeforeUnmount,
} from "@vue/composition-api";

import { getValueByPath } from "./helpers";
import { usePopper } from "./usePopper";

export const useAutocomplete = (props, { root, emit, slots }) => {
  const { setupPopper, destroyPopper, refTrigger, refDropdown } = usePopper();
  const popperOffset = [0, 7];
  const refOptions = ref(null);
  const refContainer = ref(null);

  const state = reactive({
    isOpen: false,
    newValue: props.value,
    highlightedIndex: 0,
    selected: null,
  });

  // watch

  watch(
    () => state.newValue,
    value => {
      emit("input", value);
    },
    { immediate: true },
  );

  watch(
    () => props.value,
    value => {
      state.newValue = value;
    },
    { immediate: true },
  );

  // Computed

  const filteredData = computed(() =>
    props.filterFunction
      ? props.filterFunction(state.newValue, props.data)
      : props.data,
  );

  const hasEmptySlot = computed(() => !!slots.empty);

  // Methods

  const onInput = () => {
    open();
    const currentValue = getValue(state.selected);
    if (currentValue && currentValue === state.newValue) return;
    emit("typing", state.newValue);
  };

  const select = option => {
    state.selected = option;
    emit("select", state.selected);
    if (props.clearOnSelect) {
      state.newValue = "";
    } else {
      state.newValue = getValue(option);
    }
    close();
  };

  const getValue = option => {
    if (option === null) return;

    return typeof option === "object"
      ? getValueByPath(option, props.field)
      : option;
  };

  const open = () => {
    if (state.isOpen || filteredData.value.length === 0) return;
    state.isOpen = true;
    root.$nextTick(() => {
      setupPopper(popperOffset);
      scrollToHighlighted();
    });
  };

  const close = () => {
    if (!state.isOpen) return;
    destroyPopper();
    state.isOpen = false;
    state.highlightedIndex = 0;
  };

  const scrollToHighlighted = () => {
    if (refOptions.value.children.length === 0) return;
    refOptions.value.children[state.highlightedIndex].scrollIntoView({
      block: "nearest",
    });
  };

  const highlight = index => {
    state.highlightedIndex = index;
    if (state.highlightedIndex > filteredData.value.length - 1) {
      state.highlightedIndex = 0;
    }
    if (state.highlightedIndex < 0) {
      state.highlightedIndex = filteredData.value.length - 1;
    }
    scrollToHighlighted();
  };

  const highlightNext = event => {
    if (state.isOpen) {
      event.preventDefault();
      highlight(state.highlightedIndex + 1);
    } else {
      open();
    }
  };
  const highlightNextIfOpen = event => {
    if (state.isOpen) {
      event.preventDefault();
      highlight(state.highlightedIndex + 1);
    }
  };

  const highlightPrev = () => {
    if (state.isOpen) {
      event.preventDefault();
      highlight(state.highlightedIndex - 1);
    }
  };

  const selectHighlighted = () => {
    if (filteredData.value.length > 0 && state.isOpen) {
      select(filteredData.value[state.highlightedIndex]);
    }
  };

  // Click outside

  const handleClickOutside = event => {
    const containedInDropdown = refContainer.value.contains(event.target);
    requestAnimationFrame(() => {
      if (!containedInDropdown) {
        close();
      }
    });
  };

  onMounted(() => {
    window.addEventListener("click", handleClickOutside, true);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClickOutside, true);
  });

  return {
    ...toRefs(state),
    // Refs
    refTrigger,
    refDropdown,
    refOptions,
    refContainer,
    // Computed
    filteredData,
    hasEmptySlot,
    // Methods
    onInput,
    select,
    getValue,
    open,
    close,
    highlightNext,
    highlightPrev,
    selectHighlighted,
    highlightNextIfOpen,
  };
};
