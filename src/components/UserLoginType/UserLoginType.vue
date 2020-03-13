<template>
  <div class="octo-user-login-type">
    <o-icon
      v-if="config.icon"
      :icon="config.icon"
      size="is-xl"
      class="octo-user-login-type__icon"
    />
    <div>
      <o-h type="is-inherit" size="5" class="octo-user-login-type__label">
        {{ config.label }}
      </o-h>
      <o-text size="is-xs">{{ email }}</o-text>
    </div>
  </div>
</template>

<script>
export default {
  name: "OUserLoginType",
  props: {
    user: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const maskEmail = email =>
      email.replace(/(.)(.*)@(.*)/g, (_, start, replace, end) => {
        const xxx = replace
          .split("")
          .map(() => "*")
          .join("");

        return `${start}${xxx}@${end}`;
      });

    const email = maskEmail(props.user.email);

    const typeConfigs = {
      email: {
        label: "Email"
      },
      facebook: {
        label: "Facebook connect",
        icon: "facebook-color"
      },
      google: {
        label: "Google connect",
        icon: "google-color"
      }
    };

    const config = typeConfigs[props.type];

    return { email, config };
  }
};
</script>
