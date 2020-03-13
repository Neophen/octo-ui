<template>
  <div class="control-box">
    <o-h size="3" class="mb-4">User login types</o-h>
    <o-user-login-type class="mb-4" :user="user" type="email" />
    <o-user-login-type class="mb-4" :user="user" type="facebook" />
    <o-user-login-type class="mb-4" :user="user" type="google" />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      user: {
        email: 'Eliane_Gleason@yahoo.com'
      }
    });

    return { ...toRefs(state) };
  }
};
</script>