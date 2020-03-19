<template>
  <div class="octo-modal-box__container">
    <div class="octo-box is-expanded" :style="style">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "OModalContent",
  props: {
    size: {
      type: String,
      default: "small"
    }
  },
  setup(props) {
    const sizes = {
      small: "581px",
      large: "1060px"
    };

    const style = `max-width: ${sizes[props.size]};`;
    return { style };
  }
};
</script>
