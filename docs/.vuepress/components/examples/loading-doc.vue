<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Loading</o-h>
    <o-loading :type="valueLoading"></o-loading>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueLoading: 'is-default'
    });

    return { ...toRefs(state) };
  }
};
</script>