# Typography

<Demo componentName="examples-typography-doc" />

#### Code
```html
<o-h size="1" type="is-primary">H1: primary</o-h>
<o-h size="2" type="is-primary">H2: primary</o-h>
<o-h size="3" type="is-primary">H3: primary</o-h>
<o-h size="4" type="is-primary">H4: primary</o-h>
<o-h size="5" type="is-primary">H5: primary</o-h>
<o-text type="is-primary" size="is-semi">primary semi-bold paragraph text</<o-text>
<o-text type="is-primary">primary paragraph text</<o-text>
<o-text type="is-primary" size="is-sm">primary menu paragraph text</<o-text>
<o-text type="is-primary" size="is-xs">primary subtext paragraph text</<o-text>
```

#### Heading props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|heading size|String|`1`,`2`,`3`,`4`,`5`,|`5`|
|**type**|heading style|String|`default`, `muted`, `primary`, `danger`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

#### Text props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|text size|String|`default`,`xs`,`sm`,`semi`,|`default`|
|**type**|text style|String|`default`, `muted`, `primary`, `danger`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

#### slots

|Name|Description|
|---|---|
|**default**|this will display the text|

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-popups" />