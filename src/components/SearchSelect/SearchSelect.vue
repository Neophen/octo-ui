<template>
  <o-on-click-outside :do="close">
    <div class="octo-search-select" :class="{ 'is-active': isOpen }">
      <button
        ref="refButton"
        type="button"
        @click="toggle"
        class="octo-search-select__input"
      >
        <span v-if="newValue">{{ newValue }}</span>
        <span v-else class="octo-search-select__placeholder"
          >Select a brand...</span
        >
        <o-icon icon="arrow-collapsible" dir="down" size="md" />
      </button>
      <div v-if="isOpen" class="octo-search-select__dropdown">
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
            :key="option"
            @click="select(option)"
            class="octo-search-select__option"
          >
            {{ option }}
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
import { reactive, toRefs, computed, ref } from "@vue/composition-api";
export default {
  name: "o-search-select",
  props: {
    value: {
      type: [String, Object],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    filterFunction: null
  },
  setup(props, { root, emit }) {
    const refSearch = ref(null);
    const refButton = ref(null);
    const refOptions = ref(null);

    const state = reactive({
      isOpen: false,
      search: "",
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

    const filteredOptions = computed(() =>
      props.filterFunction(state.search, props.options)
    );

    const open = () => {
      if (state.isOpen) return;
      state.isOpen = true;
      root.$nextTick(() => {
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
    };

    const toggle = () => {
      state.isOpen ? close() : open();
    };

    const select = option => {
      computedValue.value = option;
      close();
    };

    // const filteredOptions = computed(() => {
    //   return props.options.filter(option =>
    //     option.toLowerCase().startsWith(state.search.toLowerCase())
    //   );
    // });

    const scrollToHighlighted = () => {
      refOptions.value.children[state.highlightedIndex].scrollIntoView({
        block: "nearest"
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
      select(filteredOptions.value[state.highlightedIndex]);
    };

    return {
      ...toRefs(state),
      refSearch,
      refButton,
      refOptions,
      computedValue,
      filteredOptions,
      open,
      close,
      toggle,
      select,
      highlightNext,
      highlightPrev,
      selectHighlighted
    };
  }
};
</script>
