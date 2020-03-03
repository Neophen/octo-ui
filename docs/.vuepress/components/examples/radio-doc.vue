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
              <div v-for="entry in options" :key="entry.id" class="field">
                <o-radio
                  v-model="selectedOption"
                  :type="testDanger ? 'danger' : 'default'"
                  :name="`${key}[]`"
                  class="mb-2"
                  :native-value="entry.id"
                >{{ entry.title }}</o-radio>
              </div>
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Output</o-h>
          <div class="row">
            <div class="col-1">
              <p>{{ JSON.stringify(selectedOption) }}</p>
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
      options: [
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
      selectedOption: ''
    });

    return { ...toRefs(state) };
  }
};
</script>