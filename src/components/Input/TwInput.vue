<template>
  <div
    class="flex items-center w-full px-3 py-2 border border-transparent rounded leading-base bg-inverted cursor-text text-muted focus-within:shadow-none"
    :class="
      statusType === 'is-danger'
        ? 'shadow-danger active:border-danger active:text-danger hover:shadow-danger hover:border-danger focus-within:text-danger focus-within:border-danger'
        : 'shadow-idle active:border-primary active:text-primary hover:shadow-focus hover:border-primary focus-within:text-primary focus-within:border-primary'
    "
    @click="focus"
  >
    <div v-if="$slots.left" class="flex-shrink-0 mr-2">
      <slot name="left" />
    </div>
    <input
      ref="input"
      class="flex-1 text-lg font-body leading-base text-default"
      :type="type"
      :autocomplete="newAutocomplete"
      :maxlength="maxlength"
      v-model="computedValue"
      v-bind="$attrs"
      @blur="onBlur"
      @focus="onFocus"
    />
    <div v-if="$slots.right" class="flex-shrink-0 ml-2">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "onput",
  inheritAttrs: false,
  inject: ["octoFieldState"],
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: "text",
    },
    autocomplete: String,
    maxlength: [Number, String],
  },
  data() {
    return {
      fieldState: this.octoFieldState,
      newAutocomplete: this.autocomplete || "off",
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    statusType() {
      return this.fieldState.state;
    },
  },
  methods: {
    focus() {
      this.$refs.input?.focus();
    },

    onBlur($event) {
      this.$emit("blur", $event);
    },

    onFocus($event) {
      this.$emit("focus", $event);
    },
  },
};
</script>
