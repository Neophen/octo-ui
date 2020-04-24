<template>
  <label
    tabindex="0"
    class="octo-switch"
    :class="newClass"
    ref="label"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
    @blur="isMouseDown = false"
  >
    <span v-if="labelLeft" class="octo-switch__label is-left">
      <slot />
    </span>
    <input
      v-model="computedValue"
      type="checkbox"
      ref="input"
      class="octo-switch__input"
      @click.stop
      :disabled="disabled"
      :name="name"
      :required="required"
      :true-value="trueValue"
      :false-value="falseValue"
      :value="computedValue"
      hidden
    />
    <span
      class="octo-switch__check"
      :class="[{ 'is-elastic': isMouseDown && !disabled }, type]"
    />
    <span v-if="!labelLeft" class="octo-switch__label is-right">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "OSwitch",
  props: {
    value: [String, Number, Boolean, Function, Object, Array, Date],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Date],
    disabled: Boolean,
    type: String,
    name: String,
    required: Boolean,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Date],
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    labelLeft: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
      isMouseDown: false,
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
      },
    },
    newClass() {
      return [
        this.size,
        { "is-disabled": this.disabled },
        { "is-rounded": this.rounded },
        { "is-outlined": this.outlined },
      ];
    },
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value;
    },
  },
  methods: {
    focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus();
    },
  },
};
</script>
