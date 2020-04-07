<template>
  <div
    v-show="show"
    class="fixed bottom-0 right-0 flex items-center justify-center mb-4 mr-4 bg-primary-500"
  >
    {{ message }}
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";
import OctoUI from "../../main.js";

export default {
  name: "OFlash",
  props: {
    message: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  setup(props) {
    const state = reactive({
      body: "",
      show: false,
    });

    const flash = message => {
      state.body = message;
      state.show = false;
      hide();
    };

    const hide = () => {
      setTimeout(() => {
        state.show = false;
      }, 3000);
    };

    onMounted(() => {
      OctoUI.events.$on("flash", message => flash(message));
      if (!props.message) return;

      this.flash(props.message);
    });

    return { ...toRefs(state), flash, hide };
  },
};
</script>
