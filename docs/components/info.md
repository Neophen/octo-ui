# Info

<Demo componentName="examples-info-doc" />

#### Code
```html
<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Info</o-h>
    <o-info :tooltip="tooltip"></o-info>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      tooltip: "There is a maximum of 4 core pages.<br><br>They are displayed in the top navigation menu of your website."
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
|**slot_name**|this will display the text|

