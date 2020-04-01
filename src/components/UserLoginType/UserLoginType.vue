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
      <o-text size="is-xs" class="octo-user-login-type__email">{{
        maskedEmail
      }}</o-text>
    </div>
  </div>
</template>

<script>
import { typeValidator } from "../../utils/typeValidator";
export default {
  name: "OUserLoginType",
  props: {
    email: {
      type: String,
      required: true,
    },
    ...typeValidator("type", ["email", "facebook", "google"], "OUserLoginType"),
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

    const maskedEmail = maskEmail(props.email);

    const typeConfigs = {
      email: {
        label: "Email",
        icon: "contact-email",
      },
      facebook: {
        label: "Facebook connect",
        icon: "facebook-color",
      },
      google: {
        label: "Google connect",
        icon: "google-color",
      },
    };

    const config = typeConfigs[props.type];

    return { maskedEmail, config };
  },
};
</script>
