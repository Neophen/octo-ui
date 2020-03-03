<template>
  <div>
    <div class="octo-tabs">
      <ul class="octo-tabs__list">
        <li v-for="tab in tabs" :key="tab.id" class="octo-tabs__item">
          <button
            @click="selectTab(tab)"
            class="octo-tabs__tab"
            :class="{ 'is-active': tab.isActive }"
          >
            <o-h size="5" type="inherit">{{ tab.name }}</o-h>
          </button>
        </li>
      </ul>
    </div>
    <div class="octo-tabs__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs
} from "@vue/composition-api";

export default {
  name: "o-tabs",
  setup(_, { emit }) {
    const instance = getCurrentInstance();

    const state = reactive({
      tabs: []
    });

    const selectTab = selectedTab => {
      state.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });

      if (!instance) return;
      emit("change-tab", selectedTab.type);
    };

    onMounted(() => {
      state.tabs = instance.$children;
    });

    return { ...toRefs(state), selectTab };
  }
};
</script>
