<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    <div class="mb-10">
      <o-h size="2" class="mb-4">Default</o-h>
      <btn class="mb-2" squared size="sm">Default small</btn>
      <btn class="mb-2" squared>Default normal</btn>
      <btn class="mb-2" squared size="lg">Default large</btn>
      <btn class="mb-2" size="sm">Default small</btn>
      <btn class="mb-2">Default normal</btn>
      <btn class="mb-2" size="lg">Default large</btn>
      <btn class="mb-2" disabled>Default disabled</btn>
      <btn class="mb-2" loading>Default loading</btn>
      <btn class="mb-2" disabled loading>Loading disabled</btn>
      <div class="flex items-center">
        <btn class="m-2" icon="gear" size="sm" />
        <btn class="m-2" icon="gear" />
        <btn class="m-2" icon="gear" size="lg" />
      </div>
      <btn class="mb-2" icon="gear" label>Default with icon</btn>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Primary</o-h>
      <btn class="mb-2" type="primary" squared size="sm">Primary small</btn>
      <btn class="mb-2" type="primary" squared>Primary normal</btn>
      <btn class="mb-2" type="primary" squared size="lg">Primary large</btn>
      <btn class="mb-2" type="primary" size="sm">Primary small</btn>
      <btn class="mb-2" type="primary">Primary normal</btn>
      <btn class="mb-2" type="primary" size="lg">Primary large</btn>
      <btn class="mb-2" type="primary" disabled>Primary disabled</btn>
      <btn class="mb-2" type="primary" loading>Primary loading</btn>
      <btn class="mb-2" type="primary" disabled loading>Loading disabled</btn>
      <div class="flex items-center">
        <btn class="m-2" type="primary" icon="gear" size="sm" />
        <btn class="m-2" type="primary" icon="gear" />
        <btn class="m-2" type="primary" icon="gear" size="lg" />
      </div>
      <btn class="mb-2" type="primary" icon="gear" label>Primary with icon</btn>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger</o-h>
      <btn class="mb-2" type="danger" squared size="sm">Danger small</btn>
      <btn class="mb-2" type="danger" squared>Danger normal</btn>
      <btn class="mb-2" type="danger" squared size="lg">Danger large</btn>
      <btn class="mb-2" type="danger" size="sm">Danger small</btn>
      <btn class="mb-2" type="danger">Danger normal</btn>
      <btn class="mb-2" type="danger" size="lg">Danger large</btn>
      <btn class="mb-2" type="danger" disabled>Danger disabled</btn>
      <btn class="mb-2" type="danger" loading>Danger loading</btn>
      <btn class="mb-2" type="danger" disabled loading>Loading disabled</btn>
      <div class="flex items-center">
        <btn class="m-2" type="danger" icon="gear" size="sm" />
        <btn class="m-2" type="danger" icon="gear" />
        <btn class="m-2" type="danger" icon="gear" size="lg" />
      </div>
      <btn class="mb-2" type="danger" icon="gear" label>Danger with icon</btn>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger inverted</o-h>
      <btn class="mb-2" type="danger-inverted" squared size="sm">Danger small</btn>
      <btn class="mb-2" type="danger-inverted" squared>Danger normal</btn>
      <btn class="mb-2" type="danger-inverted" squared size="lg">Danger large</btn>
      <btn class="mb-2" type="danger-inverted" size="sm">Danger small</btn>
      <btn class="mb-2" type="danger-inverted">Danger normal</btn>
      <btn class="mb-2" type="danger-inverted" size="lg">Danger large</btn>
      <btn class="mb-2" type="danger-inverted" disabled>Danger disabled</btn>
      <btn class="mb-2" type="danger-inverted" loading>Danger loading</btn>
      <btn class="mb-2" type="danger-inverted" disabled loading>Loading disabled</btn>
      <div class="flex items-center">
        <btn class="m-2" type="danger-inverted" icon="gear" size="sm" />
        <btn class="m-2" type="danger-inverted" icon="gear" />
        <btn class="m-2" type="danger-inverted" icon="gear" size="lg" />
      </div>
      <btn class="mb-2" type="danger-inverted" icon="gear" label>Danger with icon</btn>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Dashed</o-h>
      <btn class="mb-2" type="dashed" squared size="sm">Dashed small</btn>
      <btn class="mb-2" type="dashed" squared>Dashed normal</btn>
      <btn class="mb-2" type="dashed" squared size="lg">Dashed large</btn>
      <btn class="mb-2" type="dashed" size="sm">Dashed small</btn>
      <btn class="mb-2" type="dashed">Dashed normal</btn>
      <btn class="mb-2" type="dashed" size="lg">Dashed large</btn>
      <btn class="mb-2" type="dashed" disabled>Dashed disabled</btn>
      <btn class="mb-2" type="dashed" loading>Dashed loading</btn>
      <btn class="mb-2" type="dashed" disabled loading>Loading disabled</btn>
      <div class="flex items-center">
        <btn class="m-2" type="dashed" icon="gear" size="sm" />
        <btn class="m-2" type="dashed" icon="gear" />
        <btn class="m-2" type="dashed" icon="gear" size="lg" />
      </div>
      <btn class="mb-2" type="dashed" icon="gear" label>Dashed with icon</btn>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Default button</o-h>
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

      <div class="flex items-center">
        <o-button icon="gear" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" class="m-2"></o-button>
        <o-button icon="gear" size="is-lg" class="m-2"></o-button>
      </div>
      <o-button icon="gear" class="mb-2">Default with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Primary button</o-h>
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

      <div class="flex items-center">
        <o-button icon="gear" type="is-primary" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-primary" class="m-2"></o-button>
        <o-button icon="gear" type="is-primary" size="is-lg" class="m-2"></o-button>
      </div>
      <o-button icon="gear" type="is-primary" class="mb-2">Primary with icon</o-button>
    </div>

    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger button</o-h>
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

      <div class="flex items-center">
        <o-button icon="gear" type="is-danger" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-danger" class="m-2"></o-button>
        <o-button icon="gear" type="is-danger" size="is-lg" class="m-2"></o-button>
      </div>
      <o-button icon="gear" type="is-danger" class="mb-2">Danger with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Danger inverted</o-h>
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

      <div class="flex items-center">
        <o-button icon="gear" inverted type="is-danger" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" inverted type="is-danger" class="m-2"></o-button>
        <o-button icon="gear" inverted type="is-danger" size="is-lg" class="m-2"></o-button>
      </div>
      <o-button icon="gear" type="is-danger" inverted class="mb-2">Danger with icon</o-button>
    </div>
    <div class="mb-10">
      <o-h size="2" class="mb-4">Dashed button</o-h>
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

      <div class="flex items-center">
        <o-button icon="gear" type="is-dashed" size="is-sm" class="m-2"></o-button>
        <o-button icon="gear" type="is-dashed" class="m-2"></o-button>
        <o-button icon="gear" type="is-dashed" size="is-lg" class="m-2"></o-button>
      </div>
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