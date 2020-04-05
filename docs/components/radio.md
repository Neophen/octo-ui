# Radio

<Demo componentName="examples-radio-doc" />

#### Code
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


#### props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

#### slots

|Name|Description|
|---|---|
|**slot_name**|description|

