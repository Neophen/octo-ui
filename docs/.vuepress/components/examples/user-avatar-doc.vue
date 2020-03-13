<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">With Image</o-h>
    <div class="flex mb-4">
      <o-user-avatar class="mr-2" :avatar="imgSrc" size="is-tiny" />
      <o-user-avatar class="mr-2" :avatar="imgSrc" />
    </div>
    <o-h size="3" class="mb-2">No image</o-h>
    <div class="flex">
      <o-user-avatar class="mr-2" size="is-tiny" />
      <o-user-avatar class="mr-2" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      imgSrc: "/user-avatar.jpeg"
    });

    return { ...toRefs(state) };
  }
};
</script>