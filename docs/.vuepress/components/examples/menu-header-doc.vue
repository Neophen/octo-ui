<template>
  <div>
    <div class="control-box mb-4">
      <o-menu-header version="v1.0">
        <o-icon icon="scanorama" pack="site_logos" />
      </o-menu-header>
    </div>
    <div class="control-box bg-primary mb-4">
      <o-menu-header version="v2.0" type="is-inverted">
        <o-icon icon="scanorama" pack="site_logos" />
      </o-menu-header>
    </div>
    <div class="control-box mb-4">
      <o-menu-header version="v2.0" type="is-muted">
        <o-icon icon="scanorama" pack="site_logos" />
      </o-menu-header>
    </div>
    <div class="control-box mb-4">
      <o-menu-header version="v2.0" type="is-primary">
        <o-icon icon="scanorama" pack="site_logos" />
      </o-menu-header>
    </div>
    <div class="control-box mb-4">
      <o-menu-header version="v2.0" type="is-danger">
        <o-icon icon="scanorama" pack="site_logos" />
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