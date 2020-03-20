# Menu

<Demo componentName="examples-menu-doc" />

#### Code
```html
<template>
  <o-menu :items="menuItems" />
</template>

<script>
import { reactive, toRefs, computed } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      selectedItem: "home"
    });

    const checkActive = id => state.selectedItem === id;
    const setActive = id => () => (state.selectedItem = id);

    const menuItems = computed(() => {
      return [
        {
          action: setActive("settings"),
          isActive: checkActive("settings"),
          icon: "nav-settings",
          iconPack: "dashboard", // if you want to use a custom pack
          title: "Settings"
        },
        {
          action: setActive("no-icon"),
          isActive: checkActive("no-icon"),
          title: "No Icon"
        }
      ];
    });

    return { ...toRefs(state), menuItems };
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