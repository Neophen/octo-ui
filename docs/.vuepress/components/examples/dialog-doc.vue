<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Dialog</o-h>
    <o-button class="mb-4" @click="showConfirm">Show confirm</o-button>
    <o-button class="mb-4" @click="showDanger">Show danger</o-button>
    <o-button class="mb-4" @click="showSeriousDanger">Serious danger</o-button>
    <o-button class="mb-4" @click="showMessage">Show simple message</o-button>
    <o-button class="mb-4" @click="(e) => showMessage(e, 'confirm')">Show simple confirm</o-button>
    <o-button class="mb-4" @click="(e) => showMessage(e, 'danger')">Show simple danger</o-button>
    <o-dialog />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup(_, { root }) {
    const showConfirm = async () => {
      const confirmed = await root.$dialog.confirm({
        title: "You need to confirm to proceed",
        message: "Something will happen if you do.",
        confirm: "Proceed"
      });

      root.$dialog.message({
        title: confirmed ? "The thing happened" : "The thing didn't happen",
        message: confirmed ? "You pressed procceed" : "You pressed cancel",
        confirm: "Awesome"
      });
    };

    const showDanger = async () => {
      const confirmed = await root.$dialog.danger({
        title: "Are you sure?",
        message: "You will delete this user.",
        confirm: "Delete user"
      });

      root.$dialog.message({
        title: confirmed ? "User deleted" : "User saved",
        message: confirmed
          ? "User has been deleted for all the times"
          : "You canceled deleting that user, you're a good guy",
        confirm: confirmed ? "Never liked him anyways" : "I like that guy"
      });
    };
    
    const showSeriousDanger = async () => {
      const confirmed = await root.$dialog.serious({
        title: "Are you sure?",
        message: "You will delete this user.",
        validate: "neophen/octo-ui",
        confirm: "Delete user"
      });

      root.$dialog.message({
        title: confirmed ? "User deleted" : "User saved",
        message: confirmed
          ? "User has been deleted for all the times"
          : "You canceled deleting that user, you're a good guy",
        confirm: confirmed ? "Never liked him anyways" : "I like that guy"
      });
    };

    const showMessage = async (e, type = "message") => {
      console.log(type);
      const confirmed = await root.$dialog[type]("Something happened");
    };

    return { showConfirm, showDanger, showMessage, showSeriousDanger };
  }
};
</script>