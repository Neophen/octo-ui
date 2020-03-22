# Item grid

<Demo componentName="examples-item-grid-doc" />

#### Code
```html
<template>
  <div class="control-box">
    <div class="mb-4">
      <o-h size="3" class="mb-2">Controls</o-h>
      <o-field label="Item count">
        <o-input type="number" min="1" v-model.number="count" />
      </o-field>
    </div>
    <o-item-grid col-first>
      <o-checkbox v-for="i of count" :key="i" v-model="selectedItems" :native-value="i">Option {{ i }}</o-checkbox>
    </o-item-grid>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 10,
      selectedItems: []
    });

    return { ...toRefs(state) };
  }
};
</script>
```

#### props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**colFirst**|should it put items in column first order|Boolean|-|`false`|
|**height**|item height|`[Boolean, Number]`|-|-|
|**minWidth**|item minWidth|`[Boolean, Number]`|-|`280px`|

#### slots

|Name|Description|
|---|---|
|**slot_name**|this will display the text|

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-popups" />