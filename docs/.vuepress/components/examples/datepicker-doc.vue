<template>
  <div class="container">
    <div class="control-box mb-4">
      <div class="mb-4">
        <o-switch v-model="isDanger">Is danger</o-switch>
      </div>
      <o-field label="Select a date" :type="isDanger ? 'is-danger' : ''">
        <o-datepicker v-model="date" placeholder="Click to select..." icon="calendar-today"></o-datepicker>
      </o-field>
    </div>
    <div class="control-box">
      <o-h size="3" class="mb-4">With min and max dates</o-h>
      <o-field label="Select a date">
        <o-datepicker
          v-model="dateMinMax"
          :min-date="minDate"
          :max-date="maxDate"
          placeholder="Click to select..."
          icon="calendar-today"
        ></o-datepicker>
      </o-field>
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
      isDanger: false,
      date: new Date(),
      dateMinMax: null,
      minDate: addDays(date, -8),
      maxDate: addDays(date, 8),
    });

    return { ...toRefs(state) };
  }
};
</script>