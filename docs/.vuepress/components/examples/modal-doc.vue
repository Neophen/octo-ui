<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box h-500">
          <o-h size="3" class="mb-2">Spacer to test out modal lock scroll</o-h>
        </div>
      </div>
      <div class="col-1">
        <o-button @click="isOpen = true" class="mt-6">open modal</o-button>

        <o-modal :active.sync="isOpen">
          <div class="octo-box">
              <o-h class="mb-4">First modal</o-h>
              <div class="row">
              <o-button @click="isOpen = false" class="mt-6">Cancel</o-button>
              <o-button type="primary" @click="isOtherOpen = true" class="mt-6">open other modal</o-button>
              </div>
          </div>
        </o-modal>

        <o-modal :active.sync="isOtherOpen">
          <div class="octo-box">
              <o-h>Other modal</o-h>
          </div>
        </o-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      isOpen: false,
      isOtherOpen: false
    });

    return { ...toRefs(state) };
  }
};
</script>