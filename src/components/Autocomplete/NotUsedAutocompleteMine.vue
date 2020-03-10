<template>
  <div
    ref="refContainer"
    class="octo-autocomplete octo-control"
    :class="{ 'is-active': isOpen }"
  >
    <o-input
      ref="refTrigger"
      v-model="newValue"
      v-bind="$attrs"
      type="text"
      :icon-right="icon"
      :icon-right-dir="iconDir"
      @focus="open"
      @input="onInput"
      @keydown.native.esc="close"
      @keydown.native.down="highlightNext"
      @keydown.native.up="highlightPrev"
      @keydown.native.enter.prevent="selectHighlighted"
      @keydown.native.tab="highlightNextIfOpen"
    />
    <div
      ref="refDropdown"
      v-if="isOpen && filteredData.length > 0"
      class="octo-autocomplete__dropdown"
    >
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
      <div
        v-if="filteredData.length === 0 && hasEmptySlot"
        class="octo-autocomplete__empty"
      >
        <slot name="empty" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

import { useAutocomplete } from "../../utils/useAutocomplete.js";
import FormElementMixin from "../../utils/FormElementMixin";

export default {
  name: "OAutocomplete",
  mixins: [FormElementMixin],
  inheritAttrs: false,
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
    iconDir: String,
    filterFunction: null,
    clearOnSelect: Boolean
  },
  setup(props, context) {
    const autocomplete = useAutocomplete(props, context);

    const state = reactive({
      // eslint-disable-next-line vue/no-reserved-keys
      _isAutocomplete: true,
      // eslint-disable-next-line vue/no-reserved-keys
      _elementRef: "input"
    });

    return {
      ...toRefs(state),
      ...autocomplete
    };
  }
};
</script>
