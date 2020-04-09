<template>
  <component
    :is="tag"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    :type="nativeType"
    :style="squared || (icon && !label) ? '' : 'min-width: 200px;'"
    class="flex items-center justify-center antialiased subpixel-antialiased border font-title leading-base"
    :class="[
      {
        'p-1 text-xs': size === 'sm',
        'p-2 text-sm': size === 'md',
        'p-3 text-lg': size === 'lg',
        'px-3': !icon && !label,
        rounded: squared,
        'rounded-full': !squared,
        'pointer-events-none': loading,
        'bg-muted-200 border-muted-200 cursor-not-allowed text-muted': disabled,
        'bg-white border-black hover:text-primary hover:shadow-focus active:bg-primary-100':
          type === 'default' && !disabled,
        'bg-white border-dashed border-black text-muted hover:text-primary hover:shadow-focus active:bg-primary-100':
          type === 'dashed' && !disabled,
        'bg-primary-500 text-inverted border-transparent hover:shadow-focus hover:bg-primary-600 active:bg-primary-700':
          type === 'primary' && !disabled,
        'bg-secondary-500 text-inverted border-transparent hover:shadow-danger hover:bg-secondary-600 active:bg-secondary-700':
          type === 'danger' && !disabled,
        'bg-white border-danger text-danger hover:shadow-danger active:bg-secondary-500 active:text-inverted':
          type === 'danger-inverted' && !disabled,
        'w-full': expanded,
      },
    ]"
  >
    <div v-if="loading && !disabled" class="flex justify-center">
      <div class="octo-loader__bars">
        <div
          v-for="bar in 3"
          :key="bar"
          class="octo-loader__bar"
          :class="{
            'bg-black': type === 'default',
            'bg-muted-500': type === 'dashed',
            'bg-inverted': type === 'primary' || type === 'danger',
            'bg-secondary-500': type === 'danger-inverted',
          }"
        ></div>
      </div>
    </div>
    <o-icon
      v-else-if="icon"
      :icon="icon"
      :pack="iconPack"
      :class="{
        'w-4 h-4': size === 'sm',
        'w-5 h-5': size === 'md',
        'w-6 h-6': size === 'lg',
        'mr-2': label,
      }"
    />
    <slot v-if="!(loading && !disabled)" />
    <o-icon v-if="disabled" icon="lock" class="w-4 h-4 ml-2" />
  </component>
</template>

<script>
// TODO convert to functional component
import Icon from "../Icon/Icon";
import { typeValidator } from "../../utils/typeValidator";

export default {
  name: "Btn",
  components: {
    [Icon.name]: Icon,
  },
  inheritAttrs: false,
  props: {
    ...typeValidator(
      "type",
      ["default", "primary", "danger", "danger-inverted", "dashed"],
      "Btn",
    ),
    ...typeValidator("size", ["md", "sm", "lg"], "Btn"),
    disabled: Boolean,
    squared: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconPack: {
      type: String,
      default: "dashboard",
    },
    label: {
      type: Boolean,
      default: false,
    },
    loading: Boolean,
    expanded: Boolean,
    ...typeValidator("nativeType", ["button", "submit", "reset"], "Btn"),
    ...typeValidator("tag", ["button", "a", "input", "inertia-link"], "Btn"),
  },
};
</script>
