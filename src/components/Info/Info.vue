<template>
  <span class="octo-info">
    <span
      ref="refTrigger"
      class="octo-info__icon"
      @mouseenter="open"
      @mouseleave="close"
      aria-haspopup="true"
      :aria-expanded="showTooltip"
    >
      <o-icon icon="info-circle" size="is-md" />
    </span>
    <div v-show="showTooltip" ref="refDropdown" class="octo-info__container">
      <o-text type="is-inverted" size="is-sm">
        <span v-html="tooltip"></span>
      </o-text>
    </div>
  </span>
</template>

<script>
import { usePopper } from "../../utils/usePopper.js";

export default {
  name: "OInfo",
  props: {
    tooltip: {
      type: String,
      required: true
    }
  },
  setup(_, { root }) {
    const {
      isPopperOpen: showTooltip,
      refTrigger,
      refDropdown,
      refContainer,
      open,
      close
    } = usePopper(root, {
      offset: [-7, 7],
      placement: "bottom-start",
      shouldTimeout: true,
      time: 200
    });

    return {
      showTooltip,
      refTrigger,
      refContainer,
      refDropdown,
      open,
      close
    };
  }
};
</script>
