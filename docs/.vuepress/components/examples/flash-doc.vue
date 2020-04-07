<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Flash</o-h>
    <o-flash v-model="valueFlash">Flash</o-flash>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueFlash: false
    });

    return { ...toRefs(state) };
  }
};
</script>