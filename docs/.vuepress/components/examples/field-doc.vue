<template>
  <div class="container">
    <div class="control-box mb-4">
      <o-field class="mb-4" label="Name" :can-toggle="true">
        <o-input value="Kevin Garvey" />
      </o-field>

      <o-field class="mb-4" label="Email" type="is-danger" message="This email is invalid">
        <o-input type="email" value="john@" maxlength="30" />
      </o-field>

      <o-field class="mb-4" label="Username" message="This username is available">
        <o-input value="johnsilver" maxlength="30" />
      </o-field>

      <o-field class="mb-4"
        label="Password"
        type="is-danger"
        :message="['Password is too short', 'Password must have at least 8 characters']"
      >
        <o-input value="123" type="password" maxlength="30" />
      </o-field>
    </div>
    <div class="control-box mb-4">
      <o-h size="3" class="mb-4">With numbers</o-h>
      <o-field class="mb-4" number="1" :hasValue="!!name" label="Name">
        <o-input v-model="name" />
      </o-field>

      <o-field class="mb-4" number="2" :hasValue="!!email" label="Email" type="is-danger" message="This email is invalid">
        <o-input type="email" v-model="email" maxlength="30" />
      </o-field>

    </div>
    <div class="control-box mb-4">
      <o-h size="3" class="mb-4">With icons</o-h>
      <o-field class="mb-4" icon="contact-slack" :hasValue="!!name" label="Name">
        <o-input v-model="name" />
      </o-field>

      <o-field class="mb-4" icon="contact-email" :hasValue="!!email" label="Email" type="is-danger" message="This email is invalid">
        <o-input type="email" v-model="email" maxlength="30" />
      </o-field>

    </div>

    <div class="control-box mb-4">
      <o-h size="3" class="mb-4">With numbers &amp; icons</o-h>
      <o-field class="mb-4" icon="contact-slack" number="1" :hasValue="!!name" label="Name">
        <o-input v-model="name" />
      </o-field>

      <o-field class="mb-4" icon="contact-email" number="2" :hasValue="!!email" label="Email" type="is-danger" message="This email is invalid">
        <o-input type="email" v-model="email" maxlength="30" />
      </o-field>

    </div>
  </div>
</template>


<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup() {
    const state = reactive({
      email: 'john@',
      name: 'Kevin Garvey'
    });

    return { ...toRefs(state) };
  }
};
</script>