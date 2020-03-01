<template>
  <component
    :is="computedTag"
    class="octo-button"
    v-bind="$attrs"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      `is-${size}`,
      `is-${type}`,
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
        'has-content': $slots.default || label
      }
    ]"
    v-on="$listeners"
  >
    <o-icon
      v-if="icon"
      :pack="iconPack"
      :icon="icon"
      :size="iconSize"
      :class="{ 'is-icon': $slots.default || label }"
    />
    <div v-if="loading" class="octo-loader">
      <div class="octo-loader__bars">
        <div class="octo-loader__bar"></div>
        <div class="octo-loader__bar"></div>
        <div class="octo-loader__bar"></div>
      </div>
    </div>
    <o-h :size="fontSize" type="inherit" v-else-if="label">{{ label }}</o-h>
    <o-h :size="fontSize" type="inherit" v-else-if="$slots.default">
      <slot />
    </o-h>
    <o-icon
      v-if="disabled && ($slots.default || label)"
      icon="lock"
      class="ml-auto"
      :size="iconSize"
    />
  </component>
</template>

<script>
// import Icon from "../icon/Icon";
import config from "../../utils/config.js";

export default {
  name: "o-button",
  components: {
    // [Icon.name]: Icon
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "default",
      validator: value => {
        return ["default", "primary", "link", "danger", "dashed"].includes(
          value
        );
      }
    },
    size: {
      type: String,
      default: "md",
      validator: value => {
        return ["sm", "md", "lg"].includes(value);
      }
    },
    label: String,
    iconPack: {
      type: String,
      default: "dashboard"
    },
    icon: String,
    iconRight: String,
    disabled: Boolean,
    squared: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: "button",
      validator: value => {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      }
    },
    tag: {
      type: String,
      default: "button",
      validator: value => {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    }
  },
  computed: {
    computedTag() {
      if (
        this.$attrs.disabled !== undefined &&
        this.$attrs.disabled !== false
      ) {
        return "button";
      }
      return this.tag;
    },
    iconSize() {
      // if (!this.size || this.size === "md") {
      //   return "md";
      // } else if (this.size === "lg") {
      //   return "md";
      // }
      return this.size;
    },
    fontSize() {
      return this.size === "lg" ? "4" : "5";
    }
  }
};
</script>
