# User login type

<Demo componentName="examples-user-login-type-doc" />

## Code
```html

<o-user-login-type :user="user" type="email" />
<o-user-login-type :user="user" type="facebook" />
<o-user-login-type :user="user" type="google" />

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      user: {
        email: 'Eliane_Gleason@yahoo.com'
      }
    });

    return { ...toRefs(state) };
  }
};
</script>
```

## props

|Name|Description|Type|Values|Default|
|---|---|---|---|---|
|**prop_name**|description|type|values|default|

## slots

|Name|Description|
|---|---|
|**slot_name**|this will display the text|

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-datepicker" />