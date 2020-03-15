<template>
  <div class="control-box">
    <div class="mb-4">
      <o-h size="3" class="mb-2">Controls</o-h>
      <o-field label="Item count">
        <o-input type="number" min="1" v-model.number="count" />
      </o-field>
    </div>
    <o-item-grid col-first>
      <o-checkbox v-for="i of count" :key="i" v-model="selectedItems" :native-value="i">Option {{ i }}</o-checkbox>
    </o-item-grid>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 10,
      selectedItems: []
    });

    return { ...toRefs(state) };
  }
};
</script>