# Typography

A component which creates a header.

## Example

<Demo componentName="examples-typography-doc" />

## Sample
```html
<o-h size="1" type="primary">H1: primary</o-h>
<o-h size="2" type="primary">H2: primary</o-h>
<o-h size="3" type="primary">H3: primary</o-h>
<o-h size="4" type="primary">H4: primary</o-h>
<o-h size="5" type="primary">H5: primary</o-h>
<o-p type="primary" size="semi">primary semi-bold paragraph text</o-p>
<o-p type="primary">primary paragraph text</o-p>
<o-p type="primary" size="sm">primary menu paragraph text</o-p>
<o-p type="primary" size="xs">primary subtext paragraph text</o-p>
```

## slots

default: enter your text here.

## Heading props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|heading size|String|`1`,`2`,`3`,`4`,`5`,|`5`|
|**type**|heading style|String|`default`, `muted`, `primary`, `error`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

## Text props
|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**size**|text size|String|`default`,`xs`,`sm`,`semi`,|`default`|
|**type**|text style|String|`default`, `muted`, `primary`, `error`, `inverted`, `inherit`,|`default`|
|**truncateLines**|add this if you want to truncate at a certain number of lines|Number|-|0|

