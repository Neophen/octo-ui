<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Modal Content</o-h>
    <o-modal-content v-model="valueModalContent">Modal Content</o-modal-content>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueModalContent: false
    });

    return { ...toRefs(state) };
  }
};
</script>