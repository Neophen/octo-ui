# Tabs

<Demo componentName="examples-tabs-doc" />

#### Code
```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">As toggle group</o-h>
          <o-tabs @change-tab="changeTab">
            <o-tab name="Core team" :selected="selectedTab === 'core-team'" />
            <o-tab name="Volunteers" :selected="selectedTab === 'volunteers'" />
            <o-tab name="Attendees" :selected="selectedTab === 'attendees'" />
          </o-tabs>
          <o-h size="4" class="mb-2 mt-6">Selected</o-h>
          <o-text>{{ selectedTab }}</o-text>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">With content</o-h>
          <o-tabs @change-tab="changeContentTab">
            <o-tab name="Core team" :selected="selectedCotentTab === 'core-team'">
              <div class="control-box mb-4 mt-6">Core team content</div>
            </o-tab>
            <o-tab name="Volunteers" :selected="selectedCotentTab === 'volunteers'">
              <div class="control-box mb-4 mt-6">Volunteers content</div>
            </o-tab>
            <o-tab name="Attendees" :selected="selectedCotentTab === 'attendees'">
              <div class="control-box mb-4 mt-6">Attendees content</div>
            </o-tab>
          </o-tabs>
          <o-h size="4" class="mb-2 mt-6">Selected</o-h>
          <o-text>{{ selectedCotentTab }}</o-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      selectedTab: "core-team",
      selectedCotentTab: "core-team"
    });

    function changeTab(tab) {
      state.selectedTab = tab;
    }
    
    function changeContentTab(tab) {
      state.selectedCotentTab = tab;
    }

    return { ...toRefs(state), changeTab, changeContentTab };
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
|**slot_name**|description|

<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-popups" />