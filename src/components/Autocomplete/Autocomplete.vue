<template>
  <div class="octo-search-select" :class="{ 'is-active': isOpen }">
    <button
      ref="refButton"
      type="button"
      @click="toggle"
      class="octo-search-select__input"
    >
      <span v-if="value">{{ value }}</span>
      <span v-else class="octo-search-select__placeholder"
        >Select a brand...</span
      >
      <o-icon icon="arrow-collapsible" dir="down" size="md" />
    </button>
    <div v-if="isOpen" class="octo-search-select__dropdown">
      <input
        ref="refSearch"
        v-model="search"
        class="octo-search-select__search"
      />
      <ul
        v-show="filteredOptions.length > 0"
        class="octo-search-select__options"
      >
        <li
          v-for="option in filteredOptions"
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
</template>

<script>
import { reactive, toRefs, computed, ref } from "@vue/composition-api";
export default {
  name: "o-autocomplete",
  setup(_, { root }) {
    const refSearch = ref(null);
    const refButton = ref(null);

    const state = reactive({
      isOpen: false,
      search: "",
      value: "Anthrax",
      options: [
        "Anthrax",
        "Dark Angel",
        "Death Angel",
        "Destruction",
        "Exodus",
        "Flotsam and Jetsam",
        "Kreator",
        "Megadeth",
        "Metallica",
        "Overkill",
        "Sepultura",
        "Slayer",
        "Testament"
      ]
    });

    const open = () => {
      state.isOpen = true;
      root.$nextTick(() => {
        console.log(refSearch.value);
        refSearch.value.focus();
      });
    };

    const close = () => {
      state.isOpen = false;
      state.search = "";
      refButton.value.focus();
    };

    const toggle = () => {
      state.isOpen ? close() : open();
    };

    const select = option => {
      state.value = option;
      close();
    };

    const filteredOptions = computed(() => {
      return state.options.filter(option =>
        option.toLowerCase().startsWith(state.search.toLowerCase())
      );
    });

    return {
      ...toRefs(state),
      refSearch,
      refButton,
      open,
      close,
      toggle,
      select,
      filteredOptions
    };
  }
};
</script>
