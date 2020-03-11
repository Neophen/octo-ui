<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Dropdown primary</o-h>
          <o-dropdown-menu type="is-primary">
            <o-button slot="trigger" icon="gear" />
            <o-dropdown-menu-item @click="testClick">Edit</o-dropdown-menu-item>
            <o-dropdown-menu-item @click="testClick">Hide</o-dropdown-menu-item>
            <o-dropdown-menu-item @click="testClick" type="is-danger">Delete</o-dropdown-menu-item>
          </o-dropdown-menu>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box h-500">
          <o-h size="3" class="mb-2">Spacer to test out dropdown-menu palcement</o-h>
        </div>
      </div>
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Dropdown-menu default</o-h>
          <o-dropdown-menu>
            <o-button slot="trigger" icon="gear" />
            <o-dropdown-menu-item @click="testClick">Edit</o-dropdown-menu-item>
            <o-dropdown-menu-item @click="testClick">Hide</o-dropdown-menu-item>
            <o-dropdown-menu-item @click="testClick" type="is-danger">Delete</o-dropdown-menu-item>
          </o-dropdown-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const testClick = () => {
      console.log("testing");
    };

    return { testClick };
  }
};
</script>