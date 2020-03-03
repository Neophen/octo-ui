# Checkbox

<Demo componentName="examples-checkbox-doc" />

## Sample
```html
<o-checkbox
      v-model="checkedEntries"
      :type="testDanger ? 'danger' : 'default'"
      :name="`${key}[]`"
      class="mb-2"
      :native-value="entry.id"
    >{{ entry.title }}</o-checkbox>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      key: "checked-entries",
      testDanger: false,
      availableEntries: [
        {
          id: "first-id",
          title: "First entry"
        },
        {
          id: "second-id",
          title: "second entry"
        },
        {
          id: "third-id",
          title: "third entry"
        }
      ],
      checkedEntries: []
    });

    return { ...toRefs(state) };
  }
};
</script>
```

## slots

default: enter your text here.

## Heading props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|heading size|String|`1`,`2`,`3`,`4`,`5`,|`5`|
|**type**|heading style|String|`default`, `muted`, `primary`, `danger`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

## Text props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|text size|String|`default`,`xs`,`sm`,`semi`,|`default`|
|**type**|text style|String|`default`, `muted`, `primary`, `danger`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

