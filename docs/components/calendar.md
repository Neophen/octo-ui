# Calendar

<Demo componentName="examples-calendar-doc" />

#### Code
```html
<template>
  <div class="container">
    <div class="control-box mb-4x">
      <o-h size="3" class="mb-2">Default</o-h>
      <o-h size="5" class="mb-2">Selected: {{ defaultDate }}</o-h>
      <o-calendar v-model="defaultDate" />
    </div>
    <div class="control-box">
      <o-h size="3" class="mb-2">With min and max</o-h>
      <o-h size="5" class="mb-2">Selected: {{ minMaxDate }}</o-h>
      <o-calendar v-model="minMaxDate" :min-date="minDate" :max-date="maxDate" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import addDays from "date-fns/addDays";
export default {
  setup() {
    const date = new Date();
    const state = reactive({
      defaultDate: new Date(),
      minMaxDate: date,
      minDate: addDays(date, -8),
      maxDate: addDays(date, 8)
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

