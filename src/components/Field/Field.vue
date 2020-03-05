<template>
  <div class="octo-field" :class="[rootClasses, computedType]">
    <label
      v-if="hasLabel"
      :for="labelFor"
      :class="{ 'has-value': value && value.length > 0 }"
      class="octo-field__label"
    >
      <div
        v-if="number"
        class="octo-field__number"
        :class="{ 'has-value': value && value.length > 0 }"
      >
        <o-h type="inherit" size="4">{{ number }}</o-h>
      </div>
      <o-icon v-if="icon" :icon="icon" class="octo_field__icon" />
      <o-h type="inherit" size="4">
        <slot v-if="$slots.label" name="label" />
        <template v-else>{{ label }}</template>
      </o-h>
      <o-switch
        v-if="canToggle"
        :name="`switch-${labelFor}`"
        v-model="canInput"
        class="octo_field__switch"
      />
      <o-h
        v-if="maxlength"
        size="5"
        class="octo-label__maxlength"
        :type="newType"
        >{{ value ? value.length : 0 }} / {{ maxlength }} Symbols</o-h
      >
    </label>
    <template v-if="canToggle">
      <slot v-if="canInput" />
    </template>
    <slot v-else />
    <o-text
      v-if="newMessage"
      class="octo-field__help"
      size="xs"
      :type="newType"
    >
      <span v-html="formattedMessage" />
    </o-text>
  </div>
</template>

<script>
export default {
  name: "OField",
  props: {
    type: [String, Object],
    label: String,
    labelFor: String,
    number: [String, Number],
    focused: Boolean,
    message: [String, Array, Object],
    expanded: Boolean,
    canToggle: Boolean,
    customClass: String,
    maxlength: [String, Number],
    icon: String,
    value: String
  },
  data() {
    return {
      newType: this.type,
      newMessage: this.message,
      canInput: this.value ? true : false,
      // eslint-disable-next-line vue/no-reserved-keys
      _isField: true // Used internally by Input and Select
    };
  },
  computed: {
    computedType() {
      return `is-${this.newType}`;
    },
    rootClasses() {
      return [
        {
          "is-expanded": this.expanded,
          "is-focused": this.focused
        }
      ];
    },
    /**
     * Formatted message in case it's an array
     * (each element is separated by <br> tag)
     */
    formattedMessage() {
      if (typeof this.newMessage === "string") {
        return this.newMessage;
      } else {
        let messages = [];
        if (Array.isArray(this.newMessage)) {
          this.newMessage.forEach(message => {
            if (typeof message === "string") {
              messages.push(message);
            } else {
              for (let key in message) {
                if (message[key]) {
                  messages.push(key);
                }
              }
            }
          });
        } else {
          for (let key in this.newMessage) {
            if (this.newMessage[key]) {
              messages.push(key);
            }
          }
        }
        return messages
          .filter(m => {
            if (m) return m;
          })
          .join(" <br> ");
      }
    },
    hasLabel() {
      return this.label || this.$slots.label;
    }
  },
  watch: {
    /**
     * Set internal type when prop change.
     */
    type(value) {
      this.newType = value;
    },

    /**
     * Set internal message when prop change.
     */
    message(value) {
      this.newMessage = value;
    }
  }
};
</script>
