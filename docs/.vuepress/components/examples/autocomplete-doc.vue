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
          <o-h size="3" class="mb-2">Tags</o-h>
          <div class="row">
            <div class="col-1">
              <o-autocomplete v-model="tags" />
            </div>
          </div>
        </div>
        <div class="control-box mb-4">
          <o-h size="3" class="mb-2">Output</o-h>
          <div class="row">
            <div class="col-1">
              <p>{{ JSON.stringify(tags) }}</p>
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
      tags: []
    });

    return { ...toRefs(state) };
  }
};
</script>