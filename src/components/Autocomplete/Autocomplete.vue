<template>
  <o-on-click-outside :do="close">
    <div
      class="octo-autocomplete octo-control"
      :class="{ 'is-active': isOpen }"
    >
      <input
        ref="refSearch"
        v-model="newValue"
        @focus="open"
        @blue="close"
        @input="open"
        @keydown.esc="close"
        @keydown.down="highlightNext"
        @keydown.up="highlightPrev"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.tab="highlightNext"
        class="octo-autocomplete__search octo-input"
      />
      <div ref="refDropdown" v-if="isOpen" class="octo-autocomplete__dropdown">
        <ul
          ref="refOptions"
          v-show="filteredData.length > 0"
          class="octo-autocomplete__options"
        >
          <li
            v-for="(option, i) in filteredData"
            :class="{ 'is-active': i === highlightedIndex }"
            :key="getOptionValue(option)"
            @click="select(option)"
            class="octo-autocomplete__option"
          >
            {{ getOptionLabel(option) }}
          </li>
        </ul>
        <div v-if="filteredData.length === 0" class="octo-autocomplete__empty">
          No results found for "{{ newValue }}"
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
  onBeforeUnmount
} from "@vue/composition-api";
import { createPopper } from "@popperjs/core";

export default {
  name: "o-autocomplete",
  props: {
    value: {
      type: [String, Object],
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: "Please select an option..."
    },
    isObject: {
      type: Boolean,
      default: false
    },
    filterFunction: null
  },
  setup(props, { root, emit }) {
    const refSearch = ref(null);
    const refOptions = ref(null);
    const refDropdown = ref(null);

    const state = reactive({
      isOpen: false,
      popper: null,
      newValue: props.value,
      highlightedIndex: 0
    });

    const computedValue = computed({
      get: () => state.newValue,
      set: value => {
        state.newValue = value;
        emit("input", value);
      }
    });

    const filteredData = computed(() =>
      props.filterFunction(state.newValue, props.data)
    );

    const setupPopper = () => {
      state.popper = createPopper(refSearch.value, refDropdown.value, {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 7]
            }
          }
        ]
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
        scrollToHighlighted();
      });
    };

    const close = () => {
      if (!state.isOpen) return;
      state.isOpen = false;
      state.highlightedIndex = 0;
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
        block: "nearest"
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
      }
    };

    const highlightPrev = () => {
      highlight(state.highlightedIndex - 1);
    };

    const selectHighlighted = () => {
      if (filteredData.value.length > 0 && state.isOpen) {
        select(filteredData.value[state.highlightedIndex]);
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
      refOptions,
      refDropdown,
      computedValue,
      filteredData,
      open,
      close,
      toggle,
      select,
      highlightNext,
      highlightPrev,
      selectHighlighted,
      getOptionValue,
      getOptionLabel
    };
  }
};
</script>
