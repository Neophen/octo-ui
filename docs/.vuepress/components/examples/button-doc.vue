<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
    <div class="mb-10">
      <o-h size="2" class="mb-4">Default button</o-h>
      <o-h size="3" class="mb-4">Text</o-h>
      <o-button icon="gear" size="is-sm" squared class="mb-2">Sqaurish small</o-button>
      <o-button icon="gear" squared class="mb-2">Sqaurish normal</o-button>
      <o-button icon="gear" size="is-lg" squared class="mb-2">Sqaurish large</o-button>
      <o-button size="is-sm" class="mb-2">Default small</o-button>
      <o-button class="mb-2">Default normal</o-button>
      <o-button size="is-lg" class="mb-2">Default large</o-button>
      <o-button hovered class="mb-2">Default hovered</o-button>
      <o-button focused class="mb-2">Default focused</o-button>
      <o-button active class="mb-2">Default active</o-button>
      <o-button disabled class="mb-2">Default disabled</o-button>
      <o-button loading class="mb-2">Default loading</o-button>

      <o-h size="3" class="mt-6 mb-4">Icon</o-h>
      <div class="flex items-center">
        <o-button icon="gear" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" class="m-2"></o-button>
        <o-button icon="gear" size="is-lg" class="m-2"></o-button>
      </div>
      <o-h size="3" class="mt-6 mb-4">Text + Icon</o-h>
      <o-button icon="gear" class="mb-2">Default with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Primary button</o-h>
      <o-h size="3" class="mb-4">Text</o-h>
      <o-button type="is-primary" size="is-sm" squared class="mb-2">Sqaurish small</o-button>
      <o-button type="is-primary" squared class="mb-2">Sqaurish normal</o-button>
      <o-button type="is-primary" size="is-lg" squared class="mb-2">Sqaurish large</o-button>
      <o-button type="is-primary" size="is-sm" class="mb-2">Primary small</o-button>
      <o-button type="is-primary" class="mb-2">Primary normal</o-button>
      <o-button type="is-primary" size="is-lg" class="mb-2">Primary large</o-button>
      <o-button type="is-primary" hovered class="mb-2">Primary hovered</o-button>
      <o-button type="is-primary" focused class="mb-2">Primary focused</o-button>
      <o-button type="is-primary" active class="mb-2">Primary active</o-button>
      <o-button type="is-primary" disabled class="mb-2">Primary disabled</o-button>
      <o-button type="is-primary" loading class="mb-2">Primary loading</o-button>

      <o-h size="3" class="mt-6 mb-4">Icon</o-h>
      <div class="flex items-center">
        <o-button icon="gear" type="is-primary" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-primary" class="m-2"></o-button>
        <o-button icon="gear" type="is-primary" size="is-lg" class="m-2"></o-button>
      </div>
      <o-h size="3" class="mt-6 mb-4">Text + Icon</o-h>
      <o-button icon="gear" type="is-primary" class="mb-2">Primary with icon</o-button>
    </div>

    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger button</o-h>
      <o-h size="3" class="mb-4">Text</o-h>
      <o-button type="is-danger" size="is-sm" squared class="mb-2">Sqaurish small</o-button>
      <o-button type="is-danger" squared class="mb-2">Sqaurish normal</o-button>
      <o-button type="is-danger" size="is-lg" squared class="mb-2">Sqaurish large</o-button>
      <o-button type="is-danger" size="is-sm" class="mb-2">Danger small</o-button>
      <o-button type="is-danger" class="mb-2">Danger normal</o-button>
      <o-button type="is-danger" size="is-lg" class="mb-2">Danger large</o-button>
      <o-button type="is-danger" hovered class="mb-2">Danger hovered</o-button>
      <o-button type="is-danger" focused class="mb-2">Danger focused</o-button>
      <o-button type="is-danger" active class="mb-2">Danger active</o-button>
      <o-button type="is-danger" disabled class="mb-2">Danger disabled</o-button>
      <o-button type="is-danger" loading class="mb-2">Danger loading</o-button>

      <o-h size="3" class="mt-6 mb-4">Icon</o-h>
      <div class="flex items-center">
        <o-button icon="gear" type="is-danger" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-danger" class="m-2"></o-button>
        <o-button icon="gear" type="is-danger" size="is-lg" class="m-2"></o-button>
      </div>
      <o-h size="3" class="mt-6 mb-4">Text + Icon</o-h>
      <o-button icon="gear" type="is-danger" class="mb-2">Danger with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger inverted</o-h>
      <o-h size="3" class="mb-4">Text</o-h>
      <o-button type="is-danger" inverted size="is-sm" squared class="mb-2">Sqaurish small</o-button>
      <o-button type="is-danger" inverted squared class="mb-2">Sqaurish normal</o-button>
      <o-button type="is-danger" size="is-lg" inverted squared class="mb-2">Sqaurish large</o-button>
      <o-button type="is-danger" inverted size="is-sm" class="mb-2">Danger small</o-button>
      <o-button type="is-danger" inverted class="mb-2">Danger normal</o-button>
      <o-button type="is-danger" inverted size="is-lg" class="mb-2">Danger large</o-button>
      <o-button type="is-danger" inverted hovered class="mb-2">Danger hovered</o-button>
      <o-button type="is-danger" inverted focused class="mb-2">Danger focused</o-button>
      <o-button type="is-danger" inverted active class="mb-2">Danger active</o-button>
      <o-button type="is-danger" inverted disabled class="mb-2">Danger disabled</o-button>
      <o-button type="is-danger" inverted loading class="mb-2">Danger loading</o-button>

      <o-h size="3" class="mt-6 mb-4">Icon</o-h>
      <div class="flex items-center">
        <o-button icon="gear" inverted type="is-danger" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" inverted type="is-danger" class="m-2"></o-button>
        <o-button icon="gear" inverted type="is-danger" size="is-lg" class="m-2"></o-button>
      </div>
      <o-h size="3" class="mt-6 mb-4">Text + Icon</o-h>
      <o-button icon="gear" type="is-danger" inverted class="mb-2">Danger with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Dashed button</o-h>
      <o-h size="3" class="mb-4">Text</o-h>
      <o-button type="is-dashed" size="is-sm" squared class="mb-2">Sqaurish small</o-button>
      <o-button type="is-dashed" squared class="mb-2">Sqaurish normal</o-button>
      <o-button type="is-dashed" size="is-lg" squared class="mb-2">Sqaurish large</o-button>
      <o-button type="is-dashed" size="is-sm" class="mb-2">Dashed small</o-button>
      <o-button type="is-dashed" class="mb-2">Dashed normal</o-button>
      <o-button type="is-dashed" size="is-lg" class="mb-2">Dashed large</o-button>
      <o-button type="is-dashed" hovered class="mb-2">Dashed hovered</o-button>
      <o-button type="is-dashed" focused class="mb-2">Dashed focused</o-button>
      <o-button type="is-dashed" active class="mb-2">Dashed active</o-button>
      <o-button type="is-dashed" disabled class="mb-2">Dashed disabled</o-button>
      <o-button type="is-dashed" loading class="mb-2">Dashed loading</o-button>

      <o-h size="3" class="mt-6 mb-4">Icon</o-h>
      <div class="flex items-center">
        <o-button icon="gear" type="is-dashed" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-dashed" class="m-2"></o-button>
        <o-button icon="gear" type="is-dashed" size="is-lg" class="m-2"></o-button>
      </div>
      <o-h size="3" class="mt-6 mb-4">Text + Icon</o-h>
      <o-button icon="gear" type="is-dashed" class="mb-2">Dashed with icon</o-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link-block {
  display: flex;
  flex-direction: column;
}
</style>