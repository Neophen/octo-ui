<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-button @click="isOpen = true">open modal</o-button>
          <ClientOnly>
            <o-modal :active.sync="isOpen">
              <div class="octo-box">
                <o-h class="mb-4">First modal</o-h>
                <div class="flex mt-6">
                  <o-button @click="isOpen = false" class="mr-4">Cancel</o-button>
                  <o-button type="primary" @click="isOtherOpen = true">open other modal</o-button>
                </div>
              </div>
            </o-modal>

            <o-modal :active.sync="isOtherOpen">
              <div class="octo-box">
                <o-h>Other modal</o-h>
              </div>
            </o-modal>
          </ClientOnly>
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
      isOpen: false,
      isOtherOpen: false
    });

    return { ...toRefs(state) };
  }
};
</script>