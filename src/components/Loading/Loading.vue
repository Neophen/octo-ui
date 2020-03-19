<template>
  <div class="octo-loading" :class="[type]">
    <div class="octo-loading__bar"></div>
    <div class="octo-loading__bar"></div>
    <div class="octo-loading__bar"></div>
  </div>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator";
export default {
  name: "OLoading",
  props: {
    ...typeValidator(
      "type",
      ["is-default", "is-primary", "is-danger", "is-muted", "is-inverted"],
      "OLoading"
    )
  }
};
</script>
