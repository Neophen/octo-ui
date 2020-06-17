<template>
  <div
    ref="refContainer"
    class="octo-control octo-select-stacked-tags has-icons-left"
  >
    <div class="octo-input__icon-container is-left">
      <o-icon class="octo-input__icon" icon="search" />
    </div>
    <input
      class="input __input"
      ref="refTrigger"
      :placeholder="placeholder"
      v-model="search"
      autocomplete="off"
      @keydown.esc="close"
      @keydown.down="highlightNextOrOpen"
      @keydown.up="highlightPrev"
      @keydown.enter.prevent="selectHighlighted"
      @keydown.tab="close"
      @focus="onFocus"
      @blur="onBlur"
    />

    <portal v-if="isPopperOpen" to="octo-popups" slim>
      <ul ref="refDropdown" class="octo-tags-search" :style="searchWidth">
        <li
          class="octo-tags-search__row"
          v-for="(option, i) in filteredOptions"
          :key="option.value"
        >
          <button
            @click="() => select(option)"
            :class="{ 'is-active': i === highlightedIndex }"
            type="button"
            class="__btn"
          >
            <o-icon
              v-if="option.icon"
              :icon="option.icon"
              class="__label-icon"
            />
            <o-text type="is-inherit" class="__label">
              <div v-html="optionText(option)"></div>
            </o-text>
            <o-text
              v-if="option.info"
              type="is-inherit"
              size="is-xs"
              class="__info"
              >{{ option.info }}</o-text
            >
          </button>
        </li>
        <li v-if="options.length === 0" class="octo-options-tags__row">
          <div class="__btn">
            <o-text type="is-inherit" class="__label">
              Nothing found for "
              <span>{{ search }}</span
              >"
            </o-text>
          </div>
        </li>
      </ul>
    </portal>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from "@vue/composition-api";
import { usePopper } from "../../utils/usePopper";

export default {
  name: "OSearchSelect",
  props: {
    options: { required: true },
    data: Array,
    filterFunction: Function,
    openOnFocus: {
      type: Boolean,
      default: true,
    },
    dropdownWidth: {
      default: "400px",
    },
    field: {
      type: String,
      default: "label",
    },
    disabled: Boolean,
    placeholder: {
      default: "Add...",
    },
    ellipsis: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const {
      isPopperOpen,
      refTrigger,
      refDropdown,
      refContainer,
      open,
      close: closePopper,
    } = usePopper({
      offset: [0, 8],
      placement: "bottom-start",
    });

    const state = reactive({
      inputRef: ref(null),
      search: "",
      isFocused: false,
      highlightedIndex: 0,
      filteredOptions: computed(() =>
        props.filterFunction(state.search, props.options),
      ),
      optionText: computed(() => option =>
        highlightText(
          typeof option === "object"
            ? getValueByPath(option, props.field)
            : option,
        ),
      ),
      searchWidth: computed(() => `width: ${props.dropdownWidth}`),
    });

    watch(
      () => state.search,
      val => (val ? open() : closePopper()),
      { immediate: true },
    );

    const clearInput = () => {
      state.search = "";
    };

    const onInput = e => (state.search = e.target.value);

    const focusInput = () => {
      if (props.inputRef) {
        props.inputRef.focus();
      }
      if (props.openOnFocus) {
        open();
      }
    };

    const getValueByPath = (obj, path) => {
      const value = path.split(".").reduce((o, i) => (o ? o[i] : null), obj);
      return value;
    };

    const addHighlightSpan = val => `<span>${val}</span>`;

    const highlightText = text =>
      state.search
        ? text.replace(new RegExp(state.search, "ig"), match =>
            addHighlightSpan(match),
          )
        : text;

    const onFocus = () => {
      state.isFocused = true;
      if (props.openOnFocus) {
        open();
      }
    };

    const onBlur = () => {
      state.isFocused = false;
    };

    const close = () => {
      if (!isPopperOpen.value) return;
      state.search = "";
      state.highlightedIndex = 0;
      closePopper();
    };

    const select = option => {
      if (option.disabled) {
        return;
      }
      state.search = option;
      emit("select", option);
      clearInput();
      close();
    };

    const scrollToHighlighted = () => {
      if (!refDropdown.value) return;
      if (refDropdown.value.children.length === 0) return;
      refDropdown.value.children[state.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    };

    const highlight = index => {
      state.highlightedIndex = index;
      if (state.highlightedIndex > state.filteredOptions.length - 1) {
        state.highlightedIndex = 0;
      }
      if (state.highlightedIndex < 0) {
        state.highlightedIndex = state.filteredOptions.length - 1;
      }
      scrollToHighlighted();
    };

    const highlightNextOrOpen = () => {
      if (!isPopperOpen.value) {
        open();
        return;
      }
      highlightNext();
    };

    const highlightNext = () => {
      highlight(state.highlightedIndex + 1);
    };

    const highlightPrev = () => {
      highlight(state.highlightedIndex - 1);
    };

    const selectHighlighted = () => {
      if (state.filteredOptions.length > 0) {
        select(state.filteredOptions[state.highlightedIndex]);
      }
    };

    return {
      ...toRefs(state),
      onInput,
      clearInput,
      onFocus,
      onBlur,
      focusInput,
      // search
      select,
      highlightPrev,
      highlightNext,
      highlightNextOrOpen,
      selectHighlighted,
      // popper
      isPopperOpen,
      refTrigger,
      refDropdown,
      refContainer,
      close,
    };
  },
};
</script>
