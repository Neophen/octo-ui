# Button

<Demo componentName="examples-button-doc" />

#### Code
```html
<o-button type="is-primary" size="is-sm" squared class="mb-2">Squared small</o-button>
<o-button type="is-primary" squared class="mb-2">Squared normal</o-button>
<o-button type="is-primary" size="is-lg" squared class="mb-2">Squared large</o-button>
<o-button type="is-primary" size="is-sm" class="mb-2">Primary small</o-button>
<o-button type="is-primary" class="mb-2">Primary normal</o-button>
<o-button type="is-primary" size="is-lg" class="mb-2">Primary large</o-button>
<o-button type="is-primary" hovered class="mb-2">Primary hovered</o-button>
<o-button type="is-primary" focused class="mb-2">Primary focused</o-button>
<o-button type="is-primary" active class="mb-2">Primary active</o-button>
<o-button type="is-primary" disabled class="mb-2">Primary disabled</o-button>
<o-button type="is-primary" loading class="mb-2">Primary loading</o-button>
<o-button icon="gear" type="is-primary" class="mb-2">Primary with icon</o-button>

// Icon only
<o-button icon="gear" type="is-primary" size="is-sm" class="m-2" />
<o-button icon="gear" type="is-primary" class="m-2" />
<o-button icon="gear" type="is-primary" size="is-lg" class="m-2" />
```

#### props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**type**|the type of the button|String|`is-default`,`is-primary`,`is-link`,`is-danger`,`is-dashed`|`is-default`|
|**size**|size|String|`is-sm`, `is-small`, `is-medium`, `is-md`, `is-large`, `is-lg`|`is-md`|
|**label**|use this instead of default slot|String|-|-|
|**iconPack**|what icon pack to use|String|-|`dashboard`|
|**icon**|icon on the left|String|-|-|
|**iconRight**|icon on the right|String|-|-|

#### slots

|Name|Description|
|---|---|
|**default**|-|


