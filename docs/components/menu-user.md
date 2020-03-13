# Menu user

<Demo componentName="examples-menu-user-doc" />

#### Code
```html
// With description
<o-menu-user :user="user" />

// No description
<o-menu-user :user="user2" />

// Default slot
<o-menu-user :user="user3">
  <div class="mt-2 flex">
    <o-icon icon="gear" size="is-lg" class="mr-2" />
    <o-icon icon="nav-log-out" size="is-lg" />
  </div>
</o-menu-user>


<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      user: {
        avatar: "/user-avatar.jpeg",
        name: "Anibal Hermann",
        description: "Dynamic Infrastructure Representative"
      },
      user2: {
        avatar: "/user-avatar.jpeg",
        name: "Verdie Mitchell"
      },
      user3: {
        avatar: "/user-avatar.jpeg",
        name: "Krystina Abernathy PhD",
        description: "Dynamic Data Planner"
      }
    });

    return { ...toRefs(state) };
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
<portal-target name="octo-datepicker" />