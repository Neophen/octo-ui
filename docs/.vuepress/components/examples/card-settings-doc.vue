<template>
  <div class="control-box octo-card">
    <o-h size="3" class="mb-2">Card settings</o-h>
    <o-card-settings :actions="actions" />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      actions: [
        {
          action: "view",
          label: "Settings"
        },
        {
          action: "open-log",
          label: "Open log"
        },
        {
          action: "hide",
          label: "Hide"
        },
        {
          action: "destroy",
          type: "is-danger",
          label: "Delete"
        }
      ]
    });

    return { ...toRefs(state) };
  }
};
</script>