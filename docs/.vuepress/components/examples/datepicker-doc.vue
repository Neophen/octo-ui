<template>
  <div class="container">
    <div class="control-box">
      <o-h size="3" class="mb-2">Sample</o-h>
      <o-field label="Select a date">
        <o-datepicker
          placeholder="Click to select..."
          icon="calendar-today"
        ></o-datepicker>
      </o-field>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      someState: false
    });

    return { ...toRefs(state) };
  }
};
</script>