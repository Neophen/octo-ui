<template>
  <div class="container mb-20">
    <o-h size="3" class="mb-2">Simple Search select</o-h>
    <o-search-select class="w-32" @select="selectItem" :options="bands" :filterFunction="filterFuction" />
    <div>
      <o-h size="3" class="mt-4 mb-2">Output</o-h>
      <p>{{ JSON.stringify(selectedBand) }}</p>
    </div>
    <o-h size="3" class="mt-5 mb-2">Object Search select</o-h>
    <o-search-select @select="selectObjectItem" :options="complexOptions" :filterFunction="filterComplexFuction" />
    <div>
      <o-h size="3" class="mt-4 mb-2">Output</o-h>
      <p>{{ JSON.stringify(selectedObjectBand) }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      key: "checked-entries",
      testDanger: false,
      selectedBand: "",
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
        "Testament",
      ],
      selectedObjectBand: "",
      complexOptions: [
        { label: "Anthrax", value: "anthrax" },
        { label: "Dark Angel", value: "dark-angel" },
        { label: "Death Angel", value: "death-angel" },
        { label: "Destruction", value: "destruction" },
        { label: "Exodus", value: "exodus" },
        { label: "Flotsam and Jetsam", value: "flotsam-and-jetsam" },
        { label: "Kreator", value: "kreator" },
        { label: "Megadeth", value: "megadeth" },
        { label: "Metallica", value: "metallica" },
        { label: "Overkill", value: "overkill" },
        { label: "Sepultura", value: "sepultura" },
        { label: "Slayer", value: "slayer" },
        { label: "Testament", value: "testament" },
      ],
    });

    const filterFuction = (search, options) => {
      return options.filter(option =>
        option.toLowerCase().startsWith(search.toLowerCase()),
      );
    };
    const filterComplexFuction = (search, options) => {
      return options.filter(option =>
        option.label.toLowerCase().startsWith(search.toLowerCase()),
      );
    };

    const selectItem = (item) => {
      state.selectedBand = item;
    }
    
    const selectObjectItem = (item) => {
      state.selectedObjectBand = item;
    }

    return { ...toRefs(state), filterFuction, filterComplexFuction, selectItem, selectObjectItem };
  },
};
</script>