<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Dropdown pprimary</o-h>
          <o-dropdown type="primary">
            <template v-slot:trigger>
              <o-button icon="gear" />
            </template>
            <li>
              <o-button>Edit</o-button>
            </li>
            <li>
              <o-button>Hide</o-button>
            </li>
            <li>
              <o-button type="danger">Delete</o-button>
            </li>
          </o-dropdown>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box h-500">
          <o-h size="3" class="mb-2">Spacer to test out dropdown palcement</o-h>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Dropdown pprimary</o-h>
          <o-dropdown type="primary">
            <template v-slot:trigger>
              <o-button icon="gear" />
            </template>
            <template v-slot="{ closeMenu }">
              <li>
                <o-button @click="closeMenu">Edit</o-button>
              </li>
              <li>
                <o-button @click="closeMenu">Hide</o-button>
              </li>
              <li>
                <o-button type="danger" @click="closeMenu">Delete</o-button>
              </li>
            </template>
          </o-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      someState: false
    });

    return { ...toRefs(state) };
  }
};
</script>