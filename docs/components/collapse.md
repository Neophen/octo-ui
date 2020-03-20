# Collapse

<Demo componentName="examples-collapse-doc" />

#### Code
```html
<template>
  <o-collapse 
    :open.sync="isOpen" 
    title="title" 
    aria-id="some-id" 
    class="mb-4" 
    key="some-id">
    <div class="mt-2 control-box">
      <p>Content goes into default slot, style it as you wish</p>
    </div>
  </o-collapse>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      isOpen: false
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

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-popups" />