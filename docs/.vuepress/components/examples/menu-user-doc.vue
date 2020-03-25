<template>
  <div class="row">
    <div class="col-1/2">
      <o-menu-user :avatar="user.avatar" :name="user.name" :description="user.description" />
    </div>
    <div class="col-1/2">
      <o-menu-user :avatar="user2.avatar" :name="user2.name" :description="user2.description" />
    </div>
    <div class="col-1/2">
      <o-menu-user :avatar="user3.avatar" :name="user3.name" :description="user3.description">
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