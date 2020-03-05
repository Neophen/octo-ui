<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">Checkboxes</o-h>
      <div class="field">
        <o-checkbox>Basic</o-checkbox>
      </div>
      <div class="field">
        <o-checkbox v-model="checkbox">{{ checkbox }}</o-checkbox>
      </div>
      <div class="field">
        <o-checkbox v-model="checkboxCustom" true-value="Yes" false-value="No">{{ checkboxCustom }}</o-checkbox>
      </div>
      <div class="field">
        <o-checkbox disabled>Disabled</o-checkbox>
      </div>

      <o-h size="3" class="mb-2 mt-6">Types</o-h>
      <div class="field">
        <o-checkbox>Default</o-checkbox>
      </div>
      <div class="field">
        <o-checkbox type="is-danger">Danger</o-checkbox>
      </div>

      <o-h size="3" class="mb-2 mt-6">Grouped</o-h>
      <div v-for="option in options" :key="option.id" class="field">
        <o-checkbox
          v-model="selectedOptions"
          :type="testDanger ? 'is-danger' : 'is-default'"
          class="mb-2"
          :native-value="option.title"
        >{{ option.title }}</o-checkbox>
      </div>

      <o-h size="5" class="mb-2 mt-6">Selection</o-h>
      <p>{{ selectedOptions }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      key: "checked-entries",
      checkbox: false,
      checkboxCustom: "Yes",
      testDanger: false,
      options: [
        {
          id: "first-id",
          title: "First entry"
        },
        {
          id: "second-id",
          title: "Second entry"
        },
        {
          id: "third-id",
          title: "Third entry"
        }
      ],
      selectedOptions: ["Second entry"]
    });

    return { ...toRefs(state) };
  }
};
</script>