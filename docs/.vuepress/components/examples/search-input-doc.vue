<template>
  <o-search-input v-model="valueSearchInput" placeholder="Search by title...">SearchInput</o-search-input>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueSearchInput: ""
    });

    return { ...toRefs(state) };
  }
};
</script>