<template>
  <div class="control-box" style="background: var(--octo-muted-100)">
    <o-field label="Max tags" class="mb-4">
      <o-input v-model="maxtags" />
    </o-field>
    <o-h size="1" class="mb-2 mt-6">Search Select</o-h>
    <o-inline-select-tags
      v-model="selectedCountries"
      :data="countries"
      :has-counter="true"
      :maxtags="maxtags"
      open-on-focus
      :ellipsis="false"
    />
    <p class="control-box mt-6 mb-4">{{ selectedCountries }}</p>
    <o-h size="1" class="mb-2 mt-6">Stacked Search Select</o-h>
    <o-stacked-select-tags
      v-model="stackedCountries"
      :data="countries"
      :has-counter="true"
      placeholder="Search by film or event name..."
      search
      open-on-focus
      :maxtags="maxtags"
      :ellipsis="false"
    />
    <p class="control-box mt-6 mb-4">{{ stackedCountries }}</p>
    <o-h size="1" class="mb-2 mt-6">Simple</o-h>
    <o-h size="3" class="mb-2 mt-6">Stacked</o-h>
    <o-stacked-tag-input v-model="simpleTags" :has-counter="true" :maxtags="maxtags" />

    <o-h size="3" class="mb-2 mt-6">Inline Tag Input</o-h>
    <o-inline-tag-input v-model="simpleTags" :has-counter="true" :maxtags="maxtags" />
    <p class="control-box mt-6 mb-4">{{ simpleTags }}</p>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/composition-api";
import { countries } from "../../countries.js";

export default {
  setup() {
    const state = reactive({
      simpleTags: ["Implemented", "Baby"],
      maxtags: 0,
      selectedCountries: [],
      stackedCountries: [],
      countries,
    });

    return { ...toRefs(state) };
  },
};
</script>