<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-4">Simple tags</o-h>
          <div class="flex mb-4">
            <o-tag>Tag label</o-tag>
            <o-tag>Another tag label</o-tag>
          </div>
          <o-h size="3" class="mb-4">Closable tags</o-h>
          <div class="row mb-4">
            <div class="col-1/2">
              <o-field label="Tag 1 enabled" class="mb-2">
                <o-switch v-model="isTag1Active"></o-switch>
              </o-field>
            </div>
            <div class="col-1/2">
              <o-field label="Tag 2 enabled" class="mb-2">
                <o-switch v-model="isTag2Active"></o-switch>
              </o-field>
            </div>
          </div>
          <div class="flex mb-4">
            <o-taglist>
              <o-tag v-if="isTag1Active" closable @close="isTag1Active = false">Tag 1 label</o-tag>
              <o-tag v-if="isTag2Active" closable @close="isTag2Active = false">Tag 2 label</o-tag>
            </o-taglist>
          </div>
          <!-- <o-tag
            v-if="isTag1Active"
            type="primary"
            closable
            aria-close-label="Close tag"
            @close="isTag1Active = false"
          >Colored closable tag label</o-tag>-->
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      isTag1Active: true,
      isTag2Active: true
    });

    return { ...toRefs(state) };
  }
};
</script>