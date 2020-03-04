<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Sample</o-h>
          <o-autocomplete :data="bands" v-model="searchItem" :filter-function="filterFuction" />

          <o-h size="3" class="mt-6 mb-2">Output</o-h>
          <p>{{ JSON.stringify(searchItem) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      searchItem: "",
      bands: [
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

    const filterFuction = (search, options) => {
      return options.filter(option =>
        option.toLowerCase().startsWith(search.toLowerCase())
      );
    };

    return { ...toRefs(state), filterFuction };
  }
};
</script>