<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <o-h size="3" class="mb-2">Dropdown primary</o-h>
          <o-dropdown type="is-primary">
            <o-button slot="trigger" icon="gear" />
            <o-dropdown-item @click="testClick">Edit</o-dropdown-item>
            <o-dropdown-item @click="testClick">Hide</o-dropdown-item>
            <o-dropdown-item @click="testClick" type="is-danger">Delete</o-dropdown-item>
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
          <o-h size="3" class="mb-2">Dropdown default</o-h>
          <o-dropdown>
            <o-button slot="trigger" icon="gear" />
            <o-dropdown-item @click="testClick">Edit</o-dropdown-item>
            <o-dropdown-item @click="testClick">Hide</o-dropdown-item>
            <o-dropdown-item @click="testClick" type="is-danger">Delete</o-dropdown-item>
          </o-dropdown>
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