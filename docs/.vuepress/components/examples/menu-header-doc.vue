<template>
  <div>
    <div class="control-box mb-4">
      <o-menu-header version="v1.0">
        <o-icon icon="scanorama" pack="site_logos" />
      </o-menu-header>
    </div>
    <div class="control-box mb-4">
      <o-menu-header version="v2.0">
        <o-icon icon="gear" />
      </o-menu-header>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      valueMenuHeader: false
    });

    return { ...toRefs(state) };
  }
};
</script>