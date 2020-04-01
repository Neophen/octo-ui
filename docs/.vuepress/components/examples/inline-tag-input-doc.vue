<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Inline Tag Input</o-h>
    <o-inline-tag-input v-model="valueInlineTagInput">InlineTagInput</o-inline-tag-input>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueInlineTagInput: []
    });

    return { ...toRefs(state) };
  }
};
</script>