<template>
  <div class="row">
    <div class="col-1/2">
      <o-menu-user :user="user" />
    </div>
    <div class="col-1/2">
      <o-menu-user :user="user2" />
    </div>
    <div class="col-1/2">
      <o-menu-user :user="user3">
        <div class="mt-2 flex">
          <o-icon icon="gear" size="is-lg" class="mr-2" />
          <o-icon icon="nav-log-out" size="is-lg" />
        </div>
      </o-menu-user>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      user: {
        avatar: "/user-avatar.jpeg",
        name: "Anibal Hermann",
        description: "Dynamic Infrastructure Representative"
      },
      user2: {
        avatar: "/user-avatar.jpeg",
        name: "Verdie Mitchell"
      },
      user3: {
        avatar: "/user-avatar.jpeg",
        name: "Krystina Abernathy PhD",
        description: "Dynamic Data Planner"
      }
    });

    return { ...toRefs(state) };
  }
};
</script>