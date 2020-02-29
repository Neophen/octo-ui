<template>
  <div class="container">
    <div class="box">
      <o-h :size="1" class="mb-2">H1: default</o-h>
      <o-h :size="2" class="mb-2">H2: default</o-h>
      <o-h :size="3" class="mb-2">H3: default</o-h>
      <o-h :size="4" class="mb-2">H4: default</o-h>
      <o-h :size="5" class="mb-2">H5: default</o-h>
    </div>
    <div class="box">
      <o-h :size="1" type="muted" class="mb-2">H1: muted</o-h>
      <o-h :size="2" type="muted" class="mb-2">H2: muted</o-h>
      <o-h :size="3" type="muted" class="mb-2">H3: muted</o-h>
      <o-h :size="4" type="muted" class="mb-2">H4: muted</o-h>
      <o-h :size="5" type="muted" class="mb-2">H5: muted</o-h>
    </div>
    <div class="box">
      <o-h :size="1" type="primary" class="mb-2">H1: primary</o-h>
      <o-h :size="2" type="primary" class="mb-2">H2: primary</o-h>
      <o-h :size="3" type="primary" class="mb-2">H3: primary</o-h>
      <o-h :size="4" type="primary" class="mb-2">H4: primary</o-h>
      <o-h :size="5" type="primary" class="mb-2">H5: primary</o-h>
    </div>
    <div class="box">
      <o-h :size="1" type="error" class="mb-2">H1: error</o-h>
      <o-h :size="2" type="error" class="mb-2">H2: error</o-h>
      <o-h :size="3" type="error" class="mb-2">H3: error</o-h>
      <o-h :size="4" type="error" class="mb-2">H4: error</o-h>
      <o-h :size="5" type="error" class="mb-2">H5: error</o-h>
    </div>
    <div class="box bg-black">
      <o-h :size="1" type="inverted" class="mb-2">H1: inverted</o-h>
      <o-h :size="2" type="inverted" class="mb-2">H2: inverted</o-h>
      <o-h :size="3" type="inverted" class="mb-2">H3: inverted</o-h>
      <o-h :size="4" type="inverted" class="mb-2">H4: inverted</o-h>
      <o-h :size="5" type="inverted" class="mb-2">H5: inverted</o-h>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -1rem;
}

.box {
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1rem;
  width: 50%;
}

.mb-2 {
  margin: 0.5rem 0;
  padding: 0;
  /* margin-bottom: 0.5rem; */
  border: none;
}

.bg-black {
  background: black;
}
</style>