<template>
  <div class="container mt-6">
    <div class="row">
      <div class="col-1/2">
        <div class="control-box">
          <o-h size="3" class="mb-2">Sample default</o-h>
          <div class="mb-2">
            <o-switch>Default</o-switch>
          </div>
          <div class="mb-2">
            <o-switch v-model="isSwitched">{{ isSwitched }}</o-switch>
          </div>
          <div class="mb-2">
            <o-switch
              v-model="isSwitchedCustom"
              true-value="Yes"
              false-value="No"
            >{{ isSwitchedCustom }}</o-switch>
          </div>
          <div class="mb-2">
            <o-switch disabled>Disabled</o-switch>
          </div>
        </div>
      </div>
      <div class="col-1/2">
        <div class="control-box">
          <o-h size="3" class="mb-2">Sample label left</o-h>
          <div class="mb-2">
            <o-switch label-left>Default</o-switch>
          </div>
          <div class="mb-2">
            <o-switch label-left v-model="isSwitched">{{ isSwitched }}</o-switch>
          </div>
          <div class="mb-2">
            <o-switch label-left
              v-model="isSwitchedCustom"
              true-value="Yes"
              false-value="No"
            >{{ isSwitchedCustom }}</o-switch>
          </div>
          <div class="mb-2">
            <o-switch label-left disabled>Disabled</o-switch>
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
      isSwitched: false,
      isSwitchedCustom: "Yes"
    });

    return { ...toRefs(state) };
  }
};
</script>