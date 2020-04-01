<template>
  <o-on-click-outside :do="close">
    <div
      class="octo-search-select octo-control"
      :class="{ 'is-active': isOpen }"
    >
      <button
        ref="refButton"
        type="button"
        @click="toggle"
        class="octo-search-select__input input"
      >
        <span v-if="newValue">{{ getOptionLabel(newValue) }}</span>
        <span v-else class="octo-search-select__placeholder">
          {{ placeholder }}
        </span>
        <o-icon icon="arrow-collapse" dir="down" size="is-md" />
      </button>
      <div ref="refDropdown" v-if="isOpen" class="octo-search-select__dropdown">
        <input
          ref="refSearch"
          v-model="search"
          @keydown.esc="close"
          @keydown.down="highlightNext"
          @keydown.up="highlightPrev"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent="highlightNext"
          class="octo-search-select__search"
        />
        <ul
          ref="refOptions"
          v-show="filteredOptions.length > 0"
          class="octo-search-select__options"
        >
          <li
            v-for="(option, i) in filteredOptions"
            :class="{ 'is-active': i === highlightedIndex }"
            :key="getOptionValue(option)"
            @click="select(option)"
            class="octo-search-select__option"
          >
            {{ getOptionLabel(option) }}
          </li>
        </ul>
        <div
          v-if="filteredOptions.length === 0"
          class="octo-search-select__empty"
        >
          No results found for "{{ search }}"
        </div>
      </div>
    </div>
  </o-on-click-outside>
</template>

<script>
import {
  reactive,
  toRefs,
  computed,
  ref,
  onBeforeUnmount,
} from "@vue/composition-api";
import { createPopper } from "@popperjs/core";

import Icon from "../Icon/Icon";

export default {
  name: "OSearchSelect",
  components: {
    [Icon.name]: Icon,
  },
  props: {
    value: {
      type: [String, Object],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Please select an option...",
    },
    isObject: {
      type: Boolean,
      default: false,
    },
    filterFunction: null,
  },
  setup(props, { root, emit }) {
    const refSearch = ref(null);
    const refButton = ref(null);
    const refOptions = ref(null);
    const refDropdown = ref(null);

    const state = reactive({
      isOpen: false,
      popper: null,
      search: "",
      newValue: props.value,
      highlightedIndex: 0,
    });

    const computedValue = computed({
      get: () => state.newValue,
      set: value => {
        state.newValue = value;
        emit("input", value);
      },
    });

    const filteredOptions = computed(() =>
      props.filterFunction(state.search, props.options),
    );

    const setupPopper = () => {
      state.popper = createPopper(refButton.value, refDropdown.value, {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 7],
            },
          },
        ],
      });
    };

    const destroyPopper = () => {
      if (state.popper) {
        state.popper.destroy();
        state.popper = null;
      }
    };

    const open = () => {
      if (state.isOpen) return;
      state.isOpen = true;
      root.$nextTick(() => {
        setupPopper();
        refSearch.value.focus();
        scrollToHighlighted();
      });
    };

    const close = () => {
      if (!state.isOpen) return;
      state.isOpen = false;
      state.search = "";
      state.highlightedIndex = 0;
      refButton.value.focus();
      destroyPopper();
    };

    const toggle = () => {
      state.isOpen ? close() : open();
    };

    const select = option => {
      computedValue.value = option;
      emit("selected", option);
      close();
    };

    const scrollToHighlighted = () => {
      if (refOptions.value.children.length === 0) return;
      refOptions.value.children[state.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    };

    const highlight = index => {
      state.highlightedIndex = index;
      if (state.highlightedIndex > filteredOptions.value.length - 1) {
        state.highlightedIndex = 0;
      }
      if (state.highlightedIndex < 0) {
        state.highlightedIndex = filteredOptions.value.length - 1;
      }
      scrollToHighlighted();
    };

    const highlightNext = () => {
      highlight(state.highlightedIndex + 1);
    };

    const highlightPrev = () => {
      highlight(state.highlightedIndex - 1);
    };

    const selectHighlighted = () => {
      if (filteredOptions.value.length > 0) {
        select(filteredOptions.value[state.highlightedIndex]);
      }
    };

    const getOptionValue = object => (props.isObject ? object.value : object);
    const getOptionLabel = object => (props.isObject ? object.label : object);

    onBeforeUnmount(() => {
      destroyPopper();
    });

    return {
      ...toRefs(state),
      refSearch,
      refButton,
      refOptions,
      refDropdown,
      computedValue,
      filteredOptions,
      open,
      close,
      toggle,
      select,
      highlightNext,
      highlightPrev,
      selectHighlighted,
      getOptionValue,
      getOptionLabel,
    };
  },
};
</script>
