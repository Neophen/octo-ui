<template>
  <label
    class="octo-checkbox"
    :class="[size, { 'is-disabled': disabled }]"
    ref="label"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      v-model="computedValue"
      :indeterminate.prop="indeterminate"
      type="checkbox"
      ref="input"
      class="octo-checkbox__input"
      @click.stop
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
    />

    <div class="octo-checkbox__mark" :class="type">
      <o-icon icon="check-mark" size="is-sm" />
    </div>
    <span class="octo-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script>
import CheckRadioMixin from "../../utils/CheckRadioMixin.js";
import Icon from "../Icon/Icon.vue";

export default {
  name: "OCheckbox",
  mixins: [CheckRadioMixin],
  components: {
    [Icon.name]: Icon,
  },
  props: {
    indeterminate: Boolean,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false,
    },
  },
};
</script>
