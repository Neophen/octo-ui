<template>
  <div class="container">
    <div class="row">
      <div class="col-1 mb-6">
        <o-h size="2" class="mt-6 mb-4">Test Field</o-h>
        <div class="control-box mb-2">
          <o-h size="3" class="mb-2">Field controls</o-h>
          <div class="row">
            <div class="col-1/3">
              <o-field label="Label" class="mb-2">
                <o-input v-model="testLabel"></o-input>
              </o-field>
            </div>
            <div class="col-1/3">
              <o-field label="Number" class="mb-2">
                <o-input native-type="number" v-model="testNumber"></o-input>
              </o-field>
            </div>
            <div class="col-1/3">
              <o-field label="Icon" class="mb-2">
                <o-input v-model="testIcon"></o-input>
              </o-field>
            </div>
            <div class="col-1/3">
              <o-field label="Helper text" class="mb-2">
                <o-input v-model="testHelper"></o-input>
              </o-field>
            </div>
            <div class="col-1/3">
              <o-field label="Max length" class="mb-2">
                <o-input native-type="number" v-model="testMaxlength"></o-input>
              </o-field>
            </div>
            <div class="col-1/3">
              <o-field label="Native type" class="mb-2">
                <o-input v-model="testNativeType"></o-input>
              </o-field>
            </div>
          </div>
        </div>
        <div class="control-box mb-2">
          <o-h size="3" class="mb-2">Field</o-h>

          <o-field
            :number="testNumber"
            :icon="testIcon"
            :label="testLabel"
            :value="testField"
            :maxlength="testMaxlength"
            :message="testHelper"
            class="mb-4"
          >
            <o-input :native-type="testNativeType" v-model="testField" :maxlength="testMaxlength" placeholder="Placeholder..."></o-input>
          </o-field>
        </div>
      </div>
      <div class="col-1 mb-6">
        <o-h size="2" class="mb-4">Input only</o-h>
        <o-h size="3" class="mb-4 mt-6">Placeholder</o-h>
        <o-input placeholder="Example placeholder idle" class="mb-4"></o-input>
        <o-input placeholder="Example placeholder hovered" hovered class="mb-4"></o-input>
        <o-input placeholder="Example placeholder focused" focused class="mb-4"></o-input>
        <o-h size="3" class="mb-4 mt-6">With value</o-h>
        <o-input value="Example default idle" class="mb-4"></o-input>
        <o-input value="Example default hovered" hovered class="mb-4"></o-input>
        <o-input value="Example default focused" focused class="mb-4"></o-input>
        <o-h size="3" class="mb-4 mt-6">Error</o-h>
        <o-input placeholder="Example error placeholder" type="danger" class="mb-4"></o-input>
        <o-input value="Example error idle" type="danger" class="mb-4"></o-input>
        <o-input value="Example error hovered" hovered type="danger" class="mb-4"></o-input>
        <o-input value="Example error focused" focused type="danger" class="mb-4"></o-input>
      </div>
      <div class="col-1 mb-6">
        <o-h size="2" class="mt-6 mb-4">Textarea</o-h>
        <o-input native-type="textarea" placeholder="Example placeholder idle" class="mb-4"></o-input>
      </div>
      <div class="col-1 mb-6">
        <o-h size="2" class="mt-6 mb-4">Field states</o-h>
        <o-h size="3" class="mt-6 mb-4">Default</o-h>
        <o-field label="Placeholder" message="Optional helper text" class="mb-4">
          <o-input placeholder="Placeholder..."></o-input>
        </o-field>
        <o-field
          label="Focused"
          message="Optional helper text"
          :value="focused"
          focused
          class="mb-4"
        >
          <o-input :value="focused" focused></o-input>
        </o-field>
        <o-field
          label="Error"
          message="Error message text"
          type="danger"
          :value="error"
          class="mb-4"
        >
          <o-input :value="error" type="danger"></o-input>
        </o-field>
        <o-field
          label="Error focused"
          message="Error message text"
          type="danger"
          focused
          class="mb-4"
        >
          <o-input :value="errorFocused" type="danger" focused></o-input>
        </o-field>
        <o-h size="3" class="mt-6 mb-4">Numbered</o-h>
        <o-field number="1" label="Placeholder" message="Optional helper text" class="mb-4">
          <o-input placeholder="Placeholder..."></o-input>
        </o-field>
        <o-field
          number="1"
          label="Value"
          message="Optional helper text"
          :value="value"
          class="mb-4"
        >
          <o-input value="Value"></o-input>
        </o-field>
        <o-field
          number="1"
          label="Focused"
          message="Optional helper text"
          focused
          :value="focused"
          class="mb-4"
        >
          <o-input :value="focused" focused></o-input>
        </o-field>
        <o-field
          number="1"
          label="Error"
          message="Error message text"
          type="danger"
          :value="value"
          class="mb-4"
        >
          <o-input :value="error" type="danger"></o-input>
        </o-field>
        <o-field
          number="1"
          label="Error focused"
          focused
          message="Error message text"
          type="danger"
          :value="value"
          class="mb-4"
        >
          <o-input :value="errorFocused" focused type="danger"></o-input>
        </o-field>
        <o-h size="3" class="mt-6 mb-4">With icon</o-h>
        <o-field
          icon="contact-facebook"
          label="Placeholder"
          message="Optional helper text"
          class="mb-4"
        >
          <o-input placeholder="Placeholder..."></o-input>
        </o-field>
        <o-field
          icon="contact-facebook"
          label="Value"
          message="Optional helper text"
          :value="value"
          class="mb-4"
        >
          <o-input value="Value"></o-input>
        </o-field>
        <o-field
          icon="contact-facebook"
          label="Focused"
          message="Optional helper text"
          focused
          :value="value"
          class="mb-4"
        >
          <o-input :value="focused" focused></o-input>
        </o-field>
        <o-field
          icon="contact-facebook"
          label="Error"
          message="Error message text"
          type="danger"
          :value="value"
          class="mb-4"
        >
          <o-input :value="error" type="danger"></o-input>
        </o-field>
        <o-field
          icon="contact-facebook"
          label="Error focused"
          focused
          message="Error message text"
          type="danger"
          :value="value"
          class="mb-4"
        >
          <o-input :value="errorFocused" focused type="danger"></o-input>
        </o-field>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup() {
    const state = reactive({
      value: "value",
      focused: "Focused",
      error: "Error",
      errorFocused: "Error focused",
      testField: "",
      testLabel: "Some field",
      testNumber: "",
      testIcon: "",
      testHelper: "",
      testMaxlength: "",
      testNativeType: "text",
      testType: "default"
    });

    return { ...toRefs(state) };
  }
};
</script>