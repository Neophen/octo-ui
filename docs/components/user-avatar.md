# User avatar

<Demo componentName="examples-user-avatar-doc" />

#### Code
```html
// With Image, will fallback to no image if src is null
<o-user-avatar avatar="/user-avatar.jpeg" size="is-tiny" />
<o-user-avatar avatar="/user-avatar.jpeg" />

// No Image
<o-user-avatar size="is-tiny" />
<o-user-avatar />
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