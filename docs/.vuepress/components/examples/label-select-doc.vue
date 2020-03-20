<template>
  <div class="control-box">
    <o-label-select v-model="currentLocale" :options="availableLocales" />
    <o-text class="mt-6"><strong>Selected:</strong> {{ currentLocale }}</o-text>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      currentLocale: null,
      availableLocales: [
        {
          label: "English",
          value: "en"
        },
        {
          label: "Lithuanian",
          value: "lt"
        }
      ]
    });

    return { ...toRefs(state) };
  }
};
</script>