<template>
  <label
    class="octo-radio"
    ref="label"
    :class="[size, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      v-model="computedValue"
      class="octo-radio__input"
      type="radio"
      ref="input"
      @click.stop
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
    />
    <span class="octo-radio__mark" :class="type" />
    <span class="octo-radio__label"><slot /></span>
  </label>
</template>

<script>
import CheckRadioMixin from "../../utils/CheckRadioMixin.js";

export default {
  name: "ORadio",
  mixins: [CheckRadioMixin],
};
</script>
