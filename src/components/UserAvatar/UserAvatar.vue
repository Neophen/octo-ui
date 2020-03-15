<template>
  <div v-if="avatar" class="octo-user-avatar" :class="[size]">
    <img
      :width="imgSize"
      :height="imgSize"
      class="octo-user-avatar__image"
      :src="avatar"
      alt="user avatar"
    />
  </div>
  <div v-else class="octo-user-avatar is-empty" :class="[size]">
    <o-icon icon="user-outlined" class="octo-user-avatar__icon" />
  </div>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator";
export default {
  name: "OUserAvatar",
  props: {
    avatar: null,
    ...typeValidator("size", ["is-large", "is-tiny"], "OUserAvatar")
  },
  setup(props) {
    const sizes = {
      "is-tiny": 16,
      "is-large": 64
    };

    const imgSize = sizes[props.size];

    return { imgSize };
  }
};
</script>
