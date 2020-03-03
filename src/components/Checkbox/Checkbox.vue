<template>
  <label
    ref="label"
    class="octo-checkbox__label"
    :class="`is-${type}`"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      class="octo-checkbox"
      v-model="computedValue"
      type="checkbox"
      ref="input"
      @click.stop
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
    />
    <div class="octo-checkbox__mark">
      <o-icon icon="check-mark" size="sm" />
    </div>
    <slot />
  </label>
</template>

<script>
// import { computed } from "@vue/composition-api";

export default {
  name: "o-checkbox",
  inheritAttrs: false,
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
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    }
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
    },
    inputClass() {
      // return "is-default";
      console.log(this.computedValue);
      if (this.error) return "is-error";

      return this.value ? "is-default" : "is-empty";
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
