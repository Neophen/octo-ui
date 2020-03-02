<template>
  <div class="octo-control">
    <input
      v-if="newNativeType !== 'textarea'"
      ref="input"
      class="octo-input"
      :class="inputClasses"
      :type="newNativeType"
      :autocomplete="newAutocomplete"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />

    <textarea
      v-else
      ref="textarea"
      class="octo-input"
      :class="inputClasses"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <button
      type="button"
      @click.stop="rightIconClick"
      class="octo-input__icon-container"
    >
      <o-icon
        v-if="hasIcon"
        class="octo-input__icon"
        :class="{ 'is-clickable': passwordReveal || iconClickable }"
        :icon="rightIcon"
        :pack="iconPack"
      />
    </button>
  </div>
</template>

<script>
import FormElementMixin from "../../utils/FormElementMixin";

export default {
  name: "o-input",
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: "default",
      validator(value) {
        const types = ["default", "danger"];
        return types.includes(value);
      }
    },
    hovered: Boolean,
    focused: Boolean,
    nativeType: {
      type: String,
      default: "text"
    },
    passwordReveal: Boolean,
    iconClickable: Boolean,
    icon: String
  },
  data() {
    return {
      newValue: this.value,
      newType: this.type,
      newNativeType: this.nativeType,
      newAutocomplete: this.autocomplete || false,
      isPasswordVisible: false,
      // eslint-disable-next-line vue/no-reserved-keys
      _elementRef: this.type === "textarea" ? "textarea" : "input"
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("input", value);
        !this.isValid && this.checkHtml5Validity();
      }
    },
    inputClasses() {
      return [
        `is-${this.type}`,
        { "is-focused": this.focused },
        { "is-hovered": this.hovered },
        { "has-icon": this.hasIcon }
      ];
    },
    hasIcon() {
      return this.passwordReveal || this.icon;
    },
    rightIcon() {
      if (this.passwordReveal) {
        return this.passwordVisibleIcon;
      }
      return this.icon;
    },

    /**
     * Current password-reveal icon name.
     */
    passwordVisibleIcon() {
      return !this.isPasswordVisible ? "eye" : "eye-off";
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value(value) {
      this.newValue = value;
    },
    nativeType(value) {
      this.newNativeType = value;
    }
  },
  methods: {
    /**
     * Toggle the visibility of a password-reveal input
     * by changing the type and focus the input right away.
     */
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.newNativeType = this.isPasswordVisible ? "text" : "password";
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    /**
     * Input's 'input' event listener, 'nextTick' is used to prevent event firing
     * before ui update, helps when using masks (Cleavejs and potentially others).
     */
    onInput(event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value;
        }
      });
    },
    iconClick(emit, event) {
      this.$emit(emit, event);
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      });
    },
    rightIconClick(event) {
      if (this.passwordReveal) {
        this.togglePasswordVisibility();
      } else if (this.iconClickable) {
        this.iconClick("icon-click", event);
      }
    }
  }
};
</script>
