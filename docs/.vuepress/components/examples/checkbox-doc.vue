<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Field controls</o-h>
          <div class="row">
            <div class="col-1">
              <o-field label="Is danger" class="mb-2">
                <o-switch v-model="testDanger"></o-switch>
              </o-field>
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Checkboxes</o-h>
          <div class="row">
            <div class="col-1">
              <div v-for="entry in availableEntries" :key="entry.id" class="field">
                <o-checkbox
                  v-model="checkedEntries"
                  :type="testDanger ? 'danger' : 'default'"
                  :name="`${key}[]`"
                  class="mb-2"
                  :native-value="entry.id"
                >{{ entry.title }}</o-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Output</o-h>
          <div class="row">
            <div class="col-1">
              <p>{{ JSON.stringify(checkedEntries) }}</p>
            </div>
          </div>
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
      key: "checked-entries",
      testDanger: false,
      availableEntries: [
        {
          id: "first-id",
          title: "First entry"
        },
        {
          id: "second-id",
          title: "second entry"
        },
        {
          id: "third-id",
          title: "third entry"
        }
      ],
      checkedEntries: []
    });

    return { ...toRefs(state) };
  }
};
</script>