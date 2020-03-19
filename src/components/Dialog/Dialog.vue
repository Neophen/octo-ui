<template>
  <o-modal :active.sync="isOpen" @cancel="handleClick(false)">
    <o-modal-content size="auto" class="octo-dialog">
      <o-h v-if="title" type="is-default" class="octo-dialog__title">{{
        title
      }}</o-h>
      <o-text v-if="message" type="is-default" class="octo-dialog__message">
        {{ message }}
      </o-text>
      <div class="octo-dialog__buttons">
        <template v-if="state === 'confirm'">
          <o-button @click.prevent="handleClick(false)">{{ cancel }}</o-button>
          <o-button @click.prevent="handleClick(true)" type="is-primary">
            {{ confirm }}
          </o-button>
        </template>
        <template v-if="state === 'danger'">
          <o-button @click.prevent="handleClick(true)" type="is-danger">
            {{ confirm }}
          </o-button>
          <o-button @click.prevent="handleClick(false)" type="is-primary">
            {{ cancel }}
          </o-button>
        </template>
        <template v-if="state === 'message'">
          <o-button @click.prevent="handleClick(true)" type="is-primary">
            {{ confirm }}
          </o-button>
        </template>
      </div>
    </o-modal-content>
  </o-modal>
</template>

<script>
import { reactive, toRefs, onMounted } from "@vue/composition-api";
import OctoUi from "../../main.js";

export default {
  name: "ODialog",
  setup() {
    const data = reactive({
      isOpen: false,
      title: "",
      message: "",
      state: "confirm",
      confirm: "Continue",
      cancel: "Cancel"
    });

    const open = () => {
      data.isOpen = true;
    };

    const fillParams = ({ title, message, state, confirm, cancel }) => {
      data.title = title;
      data.message = message;
      data.state = state;
      confirm && (data.confirm = confirm);
      cancel && (data.cancel = cancel);
      data.state = state;
      open();
    };

    onMounted(() => {
      OctoUi.events.$on("show-dialog", params => {
        fillParams(params);
      });
    });

    const handleClick = confirmed => {
      OctoUi.events.$emit("confirmed", confirmed);
      data.isOpen = false;
    };

    return { ...toRefs(data), handleClick };
  }
};
</script>
