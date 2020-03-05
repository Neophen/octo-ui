# Icon

## Example

<Demo componentName="examples-icon-doc" />

## Code
```html
<template>
  <div class="container">
    <div class="control-box">
      <o-h size="3" class="mb-2">Icons</o-h>
      <div class="flex mb-2 separate-icons">
        <o-icon icon="gear" size="is-small"></o-icon>
        <o-icon icon="nav-home" size="is-small"></o-icon>
        <o-icon icon="nav-pages" size="is-small"></o-icon>
        <o-h size="5" class="ml-2">Small</o-h>
      </div>
      <div class="flex mb-2 separate-icons">
        <o-icon icon="gear" size="is-medium"></o-icon>
        <o-icon icon="nav-home" size="is-medium"></o-icon>
        <o-icon icon="nav-pages" size="is-medium"></o-icon>
        <o-h size="5" class="ml-2">Medium</o-h>
      </div>

      <div class="flex mb-2 separate-icons">
        <o-icon icon="gear" size="is-large" type="is-default"></o-icon>
        <o-icon icon="nav-home" size="is-large" type="is-danger"></o-icon>
        <o-icon icon="nav-pages" size="is-large" type="is-primary"></o-icon>
        <o-h size="5" class="ml-2">Large</o-h>
      </div>
      <div class="flex mb-2 separate-icons">
        <o-icon icon="gear" size="is-xl" type="is-default"></o-icon>
        <o-icon icon="nav-home" size="is-xl" type="is-danger"></o-icon>
        <o-icon icon="nav-pages" size="is-xl" type="is-primary"></o-icon>
        <o-h size="5" class="ml-2">XL</o-h>
      </div>

      <o-h size="5" class="mt-6 mb-2">Custom sizes</o-h>
      <div class="flex separate-icons">
        <o-icon icon="gear" class="size-custom"></o-icon>
        <o-icon icon="nav-home" class="size-custom"></o-icon>
        <o-icon icon="nav-pages" class="size-custom"></o-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      someState: false
    });

    return { ...toRefs(state) };
  }
};
</script>

<style lang="scss">
.size-custom {
  width: 60px;
  height: 60px;
}

.separate-icons {
  .octo-icon + .octo-icon {
    margin-left: 0.5rem;
  }
}
</style>
```

## props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

## slots

|Name|Description|
|---|---|
|**slot_name**|this will display the text|