<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Sample</o-h>
    <o-sample v-model="sampleState">Sample</o-sample>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      sampleState: false
    });

    return { ...toRefs(state) };
  }
};
</script>