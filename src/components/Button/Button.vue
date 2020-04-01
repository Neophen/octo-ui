<template>
  <component
    :is="computedTag"
    class="octo-button"
    v-bind="$attrs"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      size,
      type,
      {
        'is-squared': squared,
        'is-loading': loading,
        'is-outlined': outlined,
        'is-fullwidth': expanded,
        'is-inverted': inverted,
        'is-focused': focused,
        'is-active': active,
        'is-hovered': hovered,
        'is-selected': selected,
        'has-content': $slots.default || label,
      },
    ]"
    v-on="$listeners"
  >
    <o-icon
      v-if="icon"
      :pack="iconPack"
      :icon="icon"
      :dir="iconDir"
      :size="iconSize"
      :class="{ 'is-icon': $slots.default || label }"
    />
    <div v-if="loading && !isLink" class="octo-loader">
      <div class="octo-loader__bars">
        <div class="octo-loader__bar"></div>
        <div class="octo-loader__bar"></div>
        <div class="octo-loader__bar"></div>
      </div>
    </div>
    <o-text type="is-inherit" v-else-if="isLink && (label || $slots.default)">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
    </o-text>
    <o-h :size="fontSize" type="inherit" v-else-if="label || $slots.default">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
    </o-h>
    <o-icon
      v-if="disabled && ($slots.default || label) && !isLink"
      icon="lock"
      class="octo-button__lock"
      :size="iconSize"
    />
  </component>
</template>

<script>
import Icon from "../Icon/Icon";
import { computed } from "@vue/composition-api";
import { typeValidator } from "../../utils/typeValidator";

export default {
  name: "OButton",
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props: {
    ...typeValidator(
      "type",
      ["is-default", "is-primary", "is-link", "is-danger", "is-dashed"],
      "OButton",
    ),
    ...typeValidator(
      "size",
      ["is-md", "is-sm", "is-small", "is-medium", "is-large", "is-lg"],
      "OButton",
    ),
    label: String,
    iconPack: {
      type: String,
      default: "dashboard",
    },
    icon: String,
    ...typeValidator("iconDir", ["right", "up", "left", "down"], "OButton"),
    iconRight: String,
    disabled: Boolean,
    squared: {
      type: Boolean,
      default: false,
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    ...typeValidator("nativeType", ["button", "submit", "reset"], "OButton"),
    ...typeValidator(
      "tag",
      ["button", "a", "input", "inertia-link"],
      "OButton",
    ),
  },
  setup(props, { attrs }) {
    const iconSize = computed(() => props.size);
    const fontSize = computed(() => (props.size === "is-lg" ? "4" : "5"));
    const computedTag = computed(() => {
      if (attrs.disabled !== undefined && attrs.disabled !== false) {
        return "button";
      }
      return props.tag;
    });

    const isLink = computed(() => props.type === "is-link");

    return { iconSize, fontSize, computedTag, isLink };
  },
};
</script>
