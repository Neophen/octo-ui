# Card

<Demo componentName="examples-card-doc" />

#### Code
```html
<template>
  <o-item-grid height="160px" min-width="280px">
    <o-card action="Create" @click="showMessage('Creating item')" type="is-dashed">
      <o-card-heading>Create new item</o-card-heading>
    </o-card>
    <o-card action="View" @click="showMessage('View some item')">
      <o-card-heading>Some item</o-card-heading>
      <o-card-settings slot="settings" :items="items" />
    </o-card>
  </o-item-grid>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      items: [
        {
          action: () => alert("View settings"),
          label: "Settings"
        },
        {
          action: () => alert("Destroy something"),
          type: "is-danger",
          label: "Delete"
        }
      ]
    });

    const showMessage = message => alert(message);

    return { ...toRefs(state), showMessage };
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
<portal-target name="octo-datepicker" />