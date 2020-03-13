<template>
  <div class="octo-collapse">
    <button
      :aria-controls="ariaId"
      class="octo-collapse__trigger"
      @click="toggle"
    >
      <o-h type="inherit" size="5">{{ title }}</o-h>
      <o-icon
        :dir="isOpen ? 'down' : 'right'"
        class="octo-collapse__icon"
        icon="arrow-collapsible"
      />
    </button>
    <o-transition-expand :aria-id="ariaId" :aria-expanded="isOpen">
      <div class="octo-collapse__content" v-if="isOpen" :key="ariaId">
        <slot />
      </div>
    </o-transition-expand>
  </div>
</template>

<script>
import { reactive, watch, toRefs } from "@vue/composition-api";

export default {
  name: "OCollapse",
  props: {
    title: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    },
    ariaId: {
      type: String,
      default: "no-id-provided"
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isOpen: false
    });

    const toggle = () => {
      state.isOpen = !state.isOpen;
      emit("update:open", state.isOpen);
      emit(state.isOpen ? "open" : "close");
    };

    watch(
      () => props.open,
      open => {
        state.isOpen = open;
      },
      { lazy: true }
    );

    return { ...toRefs(state), toggle };
  }
};
</script>

<style lang="scss"></style>
