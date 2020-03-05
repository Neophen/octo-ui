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
import { reactive, toRefs, computed, ref } from "@vue/composition-api";

export default {
  name: "OInput",
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
  setup(props, { emit, root }) {
    const input = ref(null);
    const textarea = ref(null);

    const state = reactive({
      newValue: props.value,
      newType: props.type,
      newNativeType: props.nativeType,
      newAutocomplete: props.autocomplete || false,
      isPasswordVisible: false,
      _elementRef: props.type === "textarea" ? "textarea" : "input"
    });

    const computedValue = computed({
      get: () => state.newValue,
      set: value => {
        state.newValue = value;
        emit("input", value);
        // !this.isValid && this.checkHtml5Validity();
      }
    });

    const inputClasses = computed(() => [
      `is-${props.type}`,
      { "is-focused": props.focused },
      { "is-hovered": props.hovered },
      { "has-icon": props.hasIcon }
    ]);

    const hasIcon = computed(() => props.passwordReveal || props.icon);

    const passwordVisibleIcon = computed(() =>
      !state.isPasswordVisible ? "eye" : "eye-off"
    );

    const rightIcon = computed(() =>
      props.passwordReveal ? passwordVisibleIcon.value : props.icon
    );

    const togglePasswordVisibility = () => {
      state.isPasswordVisible = !state.isPasswordVisible;
      state.newNativeType = state.isPasswordVisible ? "text" : "password";
      root.$nextTick(() => {
        input.value.focus();
      });
    };

    const onInput = event => {
      root.$nextTick(() => {
        if (event.target) {
          computedValue.value = event.target.value;
        }
      });
    };

    const iconClick = (emitEvent, event) => {
      emit(emitEvent, event);
      root.$nextTick(() => input.value && input.value.focus());
    };

    const rightIconClick = event => {
      if (props.passwordReveal) {
        togglePasswordVisibility();
      } else if (props.iconClickable) {
        iconClick("icon-click", event);
      }
    };

    return {
      ...toRefs(state),
      input,
      textarea,
      computedValue,
      inputClasses,
      hasIcon,
      rightIcon,
      togglePasswordVisibility,
      onInput,
      iconClick,
      rightIconClick
    };
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
  }
};
</script>
