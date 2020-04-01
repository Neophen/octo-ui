<template>
  <div>
    <div class="control-box" style="background: var(--octo-muted-100)">
      <o-field label="Max tags" class="mb-4">
        <o-input v-model="maxtags" />
      </o-field>
      <o-h size="1" class="mb-2 mt-6">Simple</o-h>
      <o-h size="3" class="mb-2 mt-6">Stacked</o-h>
     <o-stacked-tag-input v-model="simpleTags" :has-counter="true" :maxtags="maxtags" />

      <o-h size="3" class="mb-2 mt-6">Inline Tag Input</o-h>
      <o-inline-tag-input v-model="simpleTags" :has-counter="true" :maxtags="maxtags" />
      <p class="control-box mt-6 mb-4">{{ simpleTags }}</p>

      <o-h size="1" class="mb-2 mt-6">Object</o-h>
      <o-h size="3" class="mb-2 mt-6">Stacked</o-h>
      <o-h size="3" class="mb-2">Inline Tag Input</o-h>
      <o-inline-tag-input v-model="objectTags" :has-counter="true" :maxtags="maxtags" />
      <p class="control-box mt-6 ">{{ objectTags }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      simpleTags: ["Implemented", "Baby"],
      objectTags: [{value: 'hey', label: "Ho"}],
      maxtags: 0,
    });

    return { ...toRefs(state) };
  },
};
</script>