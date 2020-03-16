<template>
  <o-item-grid height="160px">
    <o-card action="Create" @click="showMessage('Creating item')" type="is-dashed">
      <o-card-heading>Create new item</o-card-heading>
    </o-card>
    <o-card action="View" @click="showMessage('View some item')">
      <o-card-heading>{{ longTitle }}</o-card-heading>

      <div slot="footer" class="flex has-accent">
        <o-user-avatar class="mr-2 is-faded" avatar="/user-avatar.jpeg" size="is-tiny" />
        <o-text size="is-sm" class="is-muted is-hoverable">Some hoverable text</o-text>
      </div>

      <o-card-settings slot="settings" :items="items" />
    </o-card>
  </o-item-grid>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const longTitle =
      "In order to assess the 3rd generation blockchain’s ability to whiteboard without lessening our aptitude.";

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

    return { ...toRefs(state), longTitle, showMessage };
  }
};
</script>