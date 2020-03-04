# Dropdown

## Example

<Demo componentName="examples-dropdown-doc" />

## Code
```html
<template>
<div>
  <o-h size="3" class="mb-2">Dropdown primary</o-h>
  <o-dropdown type="primary">
    <o-button slot="trigger" icon="gear" />
    <o-dropdown-item @click="testClick">Edit</o-dropdown-item>
    <o-dropdown-item @click="testClick">Hide</o-dropdown-item>
    <o-dropdown-item @click="testClick" type="danger">Delete</o-dropdown-item>
  </o-dropdown>

  <o-h size="3" class="mb-2">Dropdown default</o-h>
  <o-dropdown>
    <o-button slot="trigger" icon="gear" />
    <o-dropdown-item @click="testClick">Edit</o-dropdown-item>
    <o-dropdown-item @click="testClick">Hide</o-dropdown-item>
    <o-dropdown-item @click="testClick" type="danger">Delete</o-dropdown-item>
  </o-dropdown>
  </div>
</template>

<script>
export default {
  setup() {
    const testClick = () => {
      console.log("testing");
    };

    return { testClick };
  }
};
</script>
```

## props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

## slots

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**slot_name**|description|type|values|default|