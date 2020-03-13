<template>
  <o-menu :items="menuItems" />
</template>

<script>
import { reactive, toRefs, computed } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      selectedItem: "home"
    });

    const checkActive = id => state.selectedItem === id;
    const setActive = id => () => (state.selectedItem = id);

    const menuItems = computed(() => {
      return [
        {
          action: setActive("home"),
          isActive: checkActive("home"),
          icon: "nav-home",
          title: "Overview"
        },
        {
          action: setActive("pages"),
          isActive: checkActive("pages"),
          icon: "nav-pages",
          title: "Pages"
        },
        {
          action: setActive("programs"),
          isActive: checkActive("programs"),
          icon: "nav-program",
          title: "Programs"
        },
        {
          action: setActive("distributed-films"),
          isActive: checkActive("distributed-films"),
          icon: "nav-distribution",
          title: "Distributed films"
        },
        {
          action: setActive("afterscreenings"),
          isActive: checkActive("afterscreenings"),
          icon: "nav-camera",
          title: "Afterscreenings"
        },
        {
          action: setActive("posts"),
          isActive: checkActive("posts"),
          icon: "nav-posts",
          title: "Posts"
        },
        {
          action: setActive("users"),
          isActive: checkActive("users"),
          icon: "nav-users",
          title: "Users"
        },
        {
          action: setActive("tags"),
          isActive: checkActive("tags"),
          icon: "nav-tags",
          title: "Tag library"
        },
        {
          action: setActive("settings"),
          isActive: checkActive("settings"),
          icon: "nav-settings",
          title: "Settings"
        },
        {
          action: setActive("no-icon"),
          isActive: checkActive("no-icon"),
          title: "No Icon"
        }
      ];
    });

    return { ...toRefs(state), menuItems };
  }
};
</script>