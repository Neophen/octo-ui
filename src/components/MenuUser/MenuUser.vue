<template>
  <div class="octo-menu-user">
    <o-user-avatar :avatar="avatar" class="octo-menu-user__avatar" />
    <o-h size="4" dusk="username" class="octo-menu-user__username">
      {{ name }}
    </o-h>
    <o-text size="is-sm" class="octo-menu-user__description">
      {{ description }}
    </o-text>
    <slot />
  </div>
</template>

<script>
import UserAvatar from "../UserAvatar/UserAvatar.vue";

export default {
  name: "OMenuUser",
  components: {
    [UserAvatar.name]: UserAvatar,
  },
  props: {
    avatar: String,
    name: String,
    description: {
      type: String,
      default: "-",
    },
  },
};
</script>
