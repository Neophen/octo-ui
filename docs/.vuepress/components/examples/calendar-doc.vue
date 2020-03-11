<template>
  <div class="container">
    <div class="control-box">
      <o-h size="3" class="mb-2">Sample</o-h>
      <o-calendar></o-calendar>
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