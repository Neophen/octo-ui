<template>
  <o-modal :active.sync="isOpen" @cancel="handleClick(false)">
    <o-modal-content
      size="auto"
      class="octo-dialog"
      :class="{ 'is-serious': !isNotSerious }"
    >
      <o-h v-if="title" type="is-default" class="octo-dialog__title">
        {{ title }}
      </o-h>
      <o-text v-if="message" type="is-default" class="octo-dialog__message">
        {{ message }}
      </o-text>
      <div class="octo-dialog__buttons" v-if="isNotSerious">
        <template v-if="state === 'confirm'">
          <o-button @click.prevent="handleClick(false)">{{ cancel }} </o-button>
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
      <div v-else-if="state === 'serious'" class="octo-dialog__serious-danger">
        <o-field :label="`Enter: ${validate}`">
          <o-input v-model="validateInput" type="text" />
        </o-field>
        <div class="octo-dialog__buttons">
          <o-button @click.prevent="handleClick(false)">
            {{ cancel }}
          </o-button>
          <o-button
            @click.prevent="handleClick(true)"
            :disabled="invalid"
            type="is-danger"
          >
            {{ confirm }}
          </o-button>
        </div>
      </div>
    </o-modal-content>
  </o-modal>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "@vue/composition-api";
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
      cancel: "Cancel",
      validate: "",
      validateInput: "",
      invalid: computed(() => data.validate !== data.validateInput),
      isNotSerious: computed(() => data.state !== "serious")
    });

    const open = () => {
      data.isOpen = true;
    };

    const fillParams = ({
      title,
      message,
      state,
      confirm,
      cancel,
      validate
    }) => {
      data.title = title;
      data.message = message;
      data.state = state;
      confirm && (data.confirm = confirm);
      cancel && (data.cancel = cancel);
      validate && (data.validate = validate);
      data.state = state;
      open();
    };

    const handleClick = confirmed => {
      OctoUi.events.$emit("confirmed", confirmed);
      data.isOpen = false;
      data.validateInput = "";
      data.title = "";
      data.message = "";
      data.state = "confirm";
      data.confirm = "Continue";
      data.cancel = "Cancel";
      data.validate = "";
      data.validateInput = "";
    };

    onMounted(() => {
      OctoUi.events.$on("show-dialog", params => {
        fillParams(params);
      });
    });

    return { ...toRefs(data), handleClick };
  }
};
</script>
