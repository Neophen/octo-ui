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
import addDays from 'date-fns/addDays'
export default {
  setup() {
     const date = new Date();
    const state = reactive({
      normalDate: new Date(),
      date: date,
      minDate: addDays(date, -8),
      maxDate: addDays(date, 8),
    });

    return { ...toRefs(state) };
  }
};
</script>