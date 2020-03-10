<template>
  <o-on-click-outside :do="close">
    <div
      class="octo-autocomplete octo-control"
      :class="{ 'is-active': isOpen }"
    >
      <o-input
        ref="refTrigger"
        v-model="newValue"
        v-bind="$attrs"
        type="text"
        icon-right="arrow-collapsible"
        icon-right-dir="down"
        @focus="open"
        @blur="close"
        @input="onInput"
        @keydown.native.esc="close"
        @keydown.native.down="highlightNext"
        @keydown.native.up="highlightPrev"
        @keydown.native.enter.prevent="selectHighlighted"
        @keydown.native.tab="highlightNextIfOpen"
      />
      <!-- class="octo-autocomplete__search input" -->
      <div ref="refDropdown" v-if="isOpen" class="octo-autocomplete__dropdown">
        <ul
          ref="refOptions"
          v-show="filteredData.length > 0"
          class="octo-autocomplete__options"
        >
          <li
            v-for="(option, i) in filteredData"
            :class="{ 'is-active': i === highlightedIndex }"
            :key="i"
            @click="select(option)"
            class="octo-autocomplete__option"
          >
            {{ getValue(option) }}
          </li>
        </ul>
        <div v-if="filteredData.length === 0" class="octo-autocomplete__empty">
          <template v-if="hasEmptySlot">
            <slot name="empty" />
          </template>
          <span v-else>No results found for "{{ newValue }}"</span>
        </div>
      </div>
    </div>
  </o-on-click-outside>
</template>

<script>
import { reactive, toRefs, computed, ref, watch } from "@vue/composition-api";

import { usePopper } from "../../utils/usePopper.js";
import { getValueByPath } from "../../utils/helpers";
import FormElementMixin from "../../utils/FormElementMixin";

export default {
  name: "OAutocomplete",
  mixins: [FormElementMixin],
  props: {
    value: [Number, String],
    data: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "Please select an option..."
    },
    field: {
      type: String,
      default: "value"
    },
    filterFunction: null,
    clearOnSelect: Boolean
  },
  setup(props, { root, emit, slots }) {
    const { setupPopper, destroyPopper, refTrigger, refDropdown } = usePopper();
    const popperOffset = [0, 7];
    const refOptions = ref(null);

    const state = reactive({
      isOpen: false,
      newValue: props.value,
      highlightedIndex: 0,
      selected: null,
      // eslint-disable-next-line vue/no-reserved-keys
      _isAutocomplete: true,
      // eslint-disable-next-line vue/no-reserved-keys
      _elementRef: "input"
    });

    watch(
      () => state.newValue,
      value => {
        emit("input", value);
      }
    );

    watch(
      () => props.value,
      value => {
        state.newValue = value;
      }
    );

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

    const filteredData = computed(() =>
      props.filterFunction
        ? props.filterFunction(state.newValue, props.data)
        : props.data
    );

    const getValue = option => {
      if (option === null) return;

      // if (typeof this.customFormatter !== "undefined") {
      //   return this.customFormatter(option);
      // }
      return typeof option === "object"
        ? getValueByPath(option, props.field)
        : option;
    };

    const onInput = () => {
      open();
      const currentValue = getValue(state.selected);
      if (currentValue && currentValue === state.newValue) return;
      emit("typing", state.newValue);
    };

    const clearInputText = () => {
      state.newValue = "";
    };

    const open = () => {
      if (state.isOpen) return;
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

    const toggle = () => {
      state.isOpen ? close() : open();
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

    const hasEmptySlot = computed(() => !!slots.empty);

    return {
      ...toRefs(state),
      refTrigger,
      refDropdown,
      refOptions,
      filteredData,
      open,
      close,
      toggle,
      select,
      highlightNext,
      highlightNextIfOpen,
      highlightPrev,
      selectHighlighted,
      clearInputText,
      onInput,
      getValue,
      hasEmptySlot
    };
  }
};
</script>
