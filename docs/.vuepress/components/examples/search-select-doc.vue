<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box h-500">
          <o-h size="3" class="mb-2">Spacer to test out popper</o-h>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Field controls</o-h>
          <div class="row">
            <div class="col-1">
              <o-field label="Is danger" class="mb-2">
                <o-switch v-model="testDanger"></o-switch>
              </o-field>
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Simple Search select</o-h>
          <div class="row">
            <div class="col-1">
              <o-search-select
                v-model="selectedBand"
                :options="bands"
                :filter-function="filterFuction"
              />
            </div>
            <div class="col-1">
              <o-h size="3" class="mb-2">Output</o-h>
              <p>{{ JSON.stringify(selectedBand) }}</p>
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Object Search select</o-h>
          <div class="row">
            <div class="col-1">
              <o-search-select
                v-model="selectedObjectBand"
                :options="complexOptions"
                is-object
                :filter-function="filterComplexFuction"
              />
            </div>
            <div class="col-1">
              <o-h size="3" class="mb-2">Output</o-h>
              <p>{{ JSON.stringify(selectedObjectBand) }}</p>
            </div>
          </div>
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
        "Testament"
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
        { label: "Testament", value: "testament" }
      ]
    });

    const filterFuction = (search, options) => {
      return options.filter(option =>
        option.toLowerCase().startsWith(search.toLowerCase())
      );
    };
    const filterComplexFuction = (search, options) => {
      return options.filter(option =>
        option.label.toLowerCase().startsWith(search.toLowerCase())
      );
    };

    return { ...toRefs(state), filterFuction, filterComplexFuction };
  }
};
</script>