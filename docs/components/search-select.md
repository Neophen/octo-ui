# Search select

<Demo componentName="examples-search-select-doc" />

#### Code
```html
<template>
<o-search-select class="w-32" @select="selectItem" :options="bands" :filterFunction="filterFunction" />
<o-search-select @select="selectObjectItem" :options="complexOptions" :filterFunction="filterComplexFunction" />
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

    const filterFunction = (search, options) => {
      return options.filter(option =>
        option.toLowerCase().startsWith(search.toLowerCase())
      );
    };
    const filterComplexFunction = (search, options) => {
      return options.filter(option =>
        option.label.toLowerCase().startsWith(search.toLowerCase())
      );
    };

    return { ...toRefs(state), filterFuction, filterComplexFuction };
  }
};
</script>
```


#### props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

#### slots

|Name|Description|
|---|---|
|**slot_name**|description|

