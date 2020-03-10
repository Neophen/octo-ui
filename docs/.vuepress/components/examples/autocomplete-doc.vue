<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">Basic</o-h>
      <p class="mb-4">
        <b>Selected:</b>
        {{ selected }}
      </p>
      <o-field label="Find a metal band">
        <o-autocomplete
          rounded
          v-model="name"
          :data="bands"
          :filter-function="filterBandsFuction"
          placeholder="e.g. Anthrax"
          icon="magnify"
          clearable
          @select="option => selected = option"
        >
        </o-autocomplete>
      </o-field>
    </div>
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">Object array</o-h>
      <p class="mb-4">
        <b>Selected:</b>
        {{ selectedPerson }}
      </p>
      <o-field label="Find a name">
        <o-autocomplete
          rounded
          v-model="personsName"
          :data="people"
          :filter-function="filterPeopleFuction"
          placeholder="e.g. Diana"
          icon="magnify"
          field="user.first_name"
          clearable
          @select="option => selectedPerson = option"
        >
          <template slot="empty">No results found</template>
        </o-autocomplete>
      </o-field>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      name: "",
      selected: null,
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
      personsName: "",
      selectedPerson: null,
      people: [
        {
          id: 1,
          user: { first_name: "Tina", last_name: "Gilbert" },
          date: "2016/04/26 06:26:28",
          gender: "Female"
        },
        {
          id: 2,
          user: { first_name: "Igor", last_name: "Gilbert" },
          date: "2016/04/26 06:26:28",
          gender: "Male"
        },
        {
          id: 3,
          user: { first_name: "Mykolas", last_name: "Mankevicius" },
          date: "2016/04/26 06:26:28",
          gender: "Male"
        },
        {
          id: 4,
          user: { first_name: "Diana", last_name: "White" },
          date: "2016/04/26 06:26:28",
          gender: "Female"
        },
        {
          id: 5,
          user: { first_name: "Nika", last_name: "Jonson" },
          date: "2016/04/26 06:26:28",
          gender: "Female"
        },
        {
          id: 6,
          user: { first_name: "Oleg", last_name: "Pridiuk" },
          date: "2016/04/26 06:26:28",
          gender: "Male"
        }
      ]
    });

    const filterBandsFuction = (search, options) => {
      return options.filter(option =>
        option.toLowerCase().startsWith(search.toLowerCase())
      );
    };

    const filterPeopleFuction = (search, options) => {
      return options.filter(option =>
        option.user.first_name.toLowerCase().startsWith(search.toLowerCase())
      );
    };

    return { ...toRefs(state), filterBandsFuction, filterPeopleFuction };
  }
};
</script>