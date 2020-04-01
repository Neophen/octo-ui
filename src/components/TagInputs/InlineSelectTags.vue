<template>
  <div ref="refContainer" class="octo-control octo-select-tags">
    <div ref="refTrigger" @click="focusInput" class="input octo-inline-tags">
      <div class="octo-inline-tags__flex-row">
        <div
          v-for="(tag, i) in tags"
          :key="i"
          class="octo-inline-tags__flex-item"
          :class="{ 'is-limited': ellipsis }"
        >
          <o-tag @close="removeTag(tag)" :ellipsis="ellipsis" closable>
            {{ tagText(tag) }}
          </o-tag>
        </div>
        <div class="octo-inline-tags__flex-item is-input">
          <input
            ref="inputRef"
            class="__input"
            :placeholder="placeholder"
            v-model="inputValue"
            @keydown.backspace="handleBackspace"
            @keydown.esc="close"
            @keydown.down="highlightNextOrOpen"
            @keydown.up="highlightPrev"
            @keydown.enter.prevent="selectHighlighted"
            @keydown.tab="close"
            @focus="onFocus"
            @blur="onBlur"
          />
        </div>
      </div>
    </div>
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
            >
              {{ option.info }}
            </o-text>
          </button>
        </li>
        <li v-if="filteredOptions.length === 0" class="octo-tags-search__row">
          <div class="__btn">
            <o-text type="is-inherit" class="__label">
              Nothing found for "<span>{{ inputValue }}</span
              >"
            </o-text>
          </div>
        </li>
      </ul>
    </portal>
    <o-h
      size="5"
      v-if="hasCounter && maxtags"
      class="help counter"
      :class="{ 'is-invisible': !isFocused }"
    >
      {{ tags.length }} / {{ maxtags }}
    </o-h>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from "@vue/composition-api";
import { usePopper } from "../../utils/usePopper";

export default {
  name: "OInlineSelectTags",
  model: {
    prop: "tags",
    event: "update",
  },
  props: {
    tags: { required: true },
    data: Array,
    openOnFocus: {
      type: Boolean,
      default: false,
    },
    removeOnBackspace: { default: true },
    maxtags: {
      type: [Number, String],
      required: false,
    },
    hasCounter: {
      type: Boolean,
      default: false,
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
  setup(props, { emit, root }) {
    const {
      isPopperOpen,
      refTrigger,
      refDropdown,
      refContainer,
      open,
      close: closePopper,
      update,
    } = usePopper({
      offset: [0, 8],
      placement: "bottom",
    });

    const state = reactive({
      inputRef: ref(null),
      inputValue: "",
      isFocused: false,
      highlightedIndex: 0,
      inlineTags: computed({
        get: () => props.tags,
        set: tags => emit("update", tags),
      }),
    });

    watch(
      () => state.inputValue,
      val => (val ? open() : closePopper()),
    );

    const newTag = computed(() =>
      typeof state.inputValue === "string"
        ? state.inputValue.trim()
        : state.inputValue,
    );

    const removeTag = tag =>
      emit(
        "update",
        props.tags.filter(t => t !== tag),
      );

    const addTag = () => {
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return;
      }

      if (props.maxtags && props.tags.length + 1 > props.maxtags) {
        return;
      }

      emit("update", [...props.tags, newTag.value]);
      clearInput();
    };

    const clearInput = () => {
      state.inputValue = "";
    };

    const handleBackspace = () => {
      if (newTag.value.length === 0) {
        emit("update", props.tags.slice(0, -1));
        root.$nextTick(() => {
          update();
        });
      }
    };

    const onInput = e => (state.inputValue = e.target.value);

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
      state.inputValue
        ? text.replace(new RegExp(state.inputValue, "ig"), match =>
            addHighlightSpan(match),
          )
        : text;

    const optionText = computed(() => option => {
      return highlightText(
        typeof option === "object"
          ? getValueByPath(option, props.field)
          : option,
      );
    });

    const tagText = tag =>
      typeof tag === "object" ? getValueByPath(tag, props.field) : tag;

    const onFocus = () => {
      if (props.openOnFocus) {
        open();
      }
    };

    const onBlur = () => {
      // close();
    };

    const close = () => {
      if (!isPopperOpen.value) return;
      state.inputValue = "";
      state.highlightedIndex = 0;
      closePopper();
    };

    const select = option => {
      state.inputValue = option;
      addTag();
      clearInput();
      close();
    };

    const filterOptions = (search, options) => {
      return options.filter(option =>
        option.label.toLowerCase().startsWith(search.toLowerCase()),
      );
    };

    const filteredOptions = computed(() =>
      filterOptions(state.inputValue, props.data),
    );

    const searchWidth = computed(() => {
      const width = refTrigger.value
        ? refTrigger.value.offsetWidth + "px"
        : "auto";
      return `width: ${width}`;
    });

    const scrollToHighlighted = () => {
      if (!refDropdown.value) return;
      if (refDropdown.value.children.length === 0) return;
      refDropdown.value.children[state.highlightedIndex].scrollIntoView({
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
      if (filteredOptions.value.length > 0) {
        select(filteredOptions.value[state.highlightedIndex]);
      }
    };

    return {
      ...toRefs(state),
      onInput,
      newTag,
      removeTag,
      addTag,
      clearInput,
      handleBackspace,
      tagText,
      optionText,
      onFocus,
      onBlur,
      focusInput,
      searchWidth,
      // search
      filteredOptions,
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
