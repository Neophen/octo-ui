<template>
  <div class="control-box">
    <o-h size="3" class="mb-2">Dialog</o-h>
    <o-button class="mb-4" @click="showConfirm">Show confirm</o-button>
    <o-button class="mb-4" @click="showDanger">Show danger</o-button>
    <o-button class="mb-4" @click="showMessage">Show message</o-button>
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

    const showMessage = async () => {
      const confirmed = await root.$dialog.message({
        title: "Something happened",
        message: "Don't worry everything will be just fine",
        confirm: "Ok if you say so"
      });
    };

    return { showConfirm, showDanger, showMessage };
  }
};
</script>