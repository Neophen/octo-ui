<template>
  <div class="container">
    <div class="row">
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
          <o-h size="3" class="mb-2">Search select</o-h>
          <div class="row">
            <div class="col-1">
              <o-search-select
                v-model="selectedBand"
                :options="bands"
                :filter-function="filterFuction"
              />
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Output</o-h>
          <div class="row">
            <div class="col-1">
              <p>{{ JSON.stringify(selectedBand) }}</p>
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
      selectedBand: ""
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