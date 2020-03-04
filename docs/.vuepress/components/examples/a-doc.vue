<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Sample</o-h>
        </div>
      </div>
      <div class="col-1">
      </div>
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