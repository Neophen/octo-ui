<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">Radios</o-h>
      <div v-for="option in options" :key="option.id" class="field">
        <o-radio
          v-model="selectedOption"
          :type="testDanger ? 'is-danger' : 'is-default'"
          class="mb-2"
          :native-value="option.title"
        >{{ option.title }}</o-radio>
      </div>
      <div class="field">
        <o-radio disabled>Disabled</o-radio>
      </div>

      <o-h size="5" class="mb-2 mt-6">Selection</o-h>
      <p>{{ selectedOption }}</p>

      <o-h size="3" class="mb-2 mt-6">Types</o-h>
      <div class="field">
        <o-radio v-model="type" native-value="default">Default</o-radio>
      </div>
      <div class="field">
        <o-radio v-model="type" native-value="danger" type="is-danger">Danger</o-radio>
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
      checkbox: false,
      checkboxCustom: "Yes",
      testDanger: false,
      type: 'default',
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
      selectedOption: "Second entry"
    });

    return { ...toRefs(state) };
  }
};
</script>