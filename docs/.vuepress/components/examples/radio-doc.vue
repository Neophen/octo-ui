<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">Radios</o-h>
      <o-field class="field" label-for="some">
        <o-radio
          v-for="option in options" :key="option.id"
          v-model="selectedOption"
          name="some"
          :type="testDanger ? 'is-danger' : 'is-default'"
          class="mb-2"
          :native-value="option.title"
        >{{ option.title }}</o-radio>
      </o-field>
      <div class="field">
        <o-radio disabled>Disabled</o-radio>
      </div>

      <o-h size="5" class="mb-2 mt-6">Selection</o-h>
      <p>{{ selectedOption }}</p>

      <o-h size="3" class="mb-2 mt-6">Types</o-h>
      <o-field class="field" label-for="other">
        <o-radio v-model="type" name="other" native-value="default">Default</o-radio>
      
        <o-radio v-model="type" name="other" native-value="danger" type="is-danger">Danger</o-radio>
      </o-field>
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