<template>
  <div class="container">
    <div class="control-box">
      <o-field class="mb-4" label="Name">
        <o-input v-model="name"></o-input>
      </o-field>

      <o-field class="mb-4" label="Email" type="is-danger" message="This email is invalid">
        <o-input type="email" value="john@" maxlength="30"></o-input>
      </o-field>

      <o-field class="mb-4" label="Username" message="This username is available">
        <o-input value="johnsilver" maxlength="30"></o-input>
      </o-field>

      <o-field class="mb-4" label="Password">
        <o-input type="password" value="iwantmytreasure" password-reveal></o-input>
      </o-field>

      <o-field class="mb-4" label="Message">
        <o-input maxlength="200" type="textarea"></o-input>
      </o-field>
    </div>
    <div class="control-box mt-6">
      <o-h size="3" class="mb-2">Types and states</o-h>

      <o-field class="mb-4">
        <o-input placeholder="No label"></o-input>
      </o-field>

      <o-field class="mb-4" label="Error" type="is-danger" message="You can have a message too">
        <o-input placeholder="Error"></o-input>
      </o-field>

      <o-field class="mb-4" label="Disabled">
        <o-input placeholder="Disabled" disabled></o-input>
      </o-field>
    </div>
    <div class="control-box mt-6">
      <o-h size="3" class="mb-4">Icons</o-h>
      <o-field class="mb-4">
        <o-input
          placeholder="Search..."
          type="search"
          icon="search"
          icon-clickable
          @icon-click="searchIconClick"
        ></o-input>
      </o-field>

      <o-field class="mb-4">
        <o-input
          placeholder="Email"
          v-model="email"
          type="email"
          icon="contact-email"
          icon-right="close-circle"
          icon-right-clickable
          @icon-right-click="clearIconClick"
        ></o-input>
      </o-field>

      <o-field class="mb-4">
        <o-input placeholder="Image" icon="image"></o-input>
      </o-field>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      name: "John silver",
      email: "",
    });

    const searchIconClick = () => {
      alert("You wanna make a search?");
    };
    const clearIconClick = () => {
      state.email = "";
      alert("Email cleared!");
    };

    return { ...toRefs(state), searchIconClick, clearIconClick };
  }
};
</script>