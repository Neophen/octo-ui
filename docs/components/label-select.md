# Label select

<Demo componentName="examples-label-select-doc" />

#### Code
```html
<o-label-select v-model="currentLocale" :options="availableLocales" />
```

```js
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      currentLocale: {
        label: "English",
        value: "en"
      },
      availableLocales: [
        {
          label: "English",
          value: "en"
        },
        {
          label: "Lithuanian",
          value: "lt"
        }
      ]
    });

    return { ...toRefs(state) };
  }
};
```

#### props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

#### slots

|Name|Description|
|---|---|
|**slot_name**|this will display the text|

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-datepicker" />