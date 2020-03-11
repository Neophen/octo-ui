<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-h size="3" class="mb-2">With min and max</o-h>
      <o-h size="5" class="mb-2">Selected: {{ date }}</o-h>
      <o-calendar v-model="date" :min-date="minDate" :max-date="maxDate" />
    </div>
    <div class="control-box">
      <o-h size="3" class="mb-2">Normal</o-h>
      <o-h size="5" class="mb-2">Selected: {{ date }}</o-h>
      <o-calendar v-model="normalDate" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      normalDate: new Date(),
      date: new Date(),
      minDate: new Date('2020-12-07'),
      maxDate: new Date('2021-01-21'),
    });

    return { ...toRefs(state) };
  }
};
</script>