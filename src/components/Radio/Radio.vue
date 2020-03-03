<template>
  <label
    class="octo-radio__label"
    ref="label"
    :disabled="disabled"
    :class="`is-${type}`"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      v-model="computedValue"
      class="octo-radio"
      type="radio"
      ref="input"
      @click.stop
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
    />
    <span class="octo-radio__mark" :class="type" />
    <span class="control-label"><slot /></span>
  </label>
</template>

<script>
export default {
  name: "o-radio",
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    type: {
      type: String,
      default: "default",
      validator(value) {
        const types = ["default", "danger"];
        return types.includes(value);
      }
    },
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String
  },
  data() {
    return {
      newValue: this.value
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
      }
    }
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value;
    }
  },
  methods: {
    focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus();
    }
  }
};
</script>
