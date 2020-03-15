<template>
  <o-item-grid height="160px">
    <o-card action="Create" @click="showMessage('Creating item')" type="is-dashed">
      <o-card-heading>Create new item</o-card-heading>
    </o-card>
    <o-card action="View" @click="showMessage('View some item')">
      <o-card-heading>Some item</o-card-heading>
      <o-card-settings slot="settings" :items="items" />
    </o-card>
  </o-item-grid>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      items: [
        {
          action: () => alert("View settings"),
          label: "Settings"
        },
        {
          action: () => alert("Destroy something"),
          type: "is-danger",
          label: "Delete"
        }
      ]
    });

    const showMessage = message => alert(message);

    return { ...toRefs(state), showMessage };
  }
};
</script>