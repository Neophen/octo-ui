<template>
  <div class="octo-modal-box__container">
    <div class="octo-box" :style="style">
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
      auto: "max-width: 581px;",
      small: "width: 100vw; max-width: 581px;",
      large: "width: 100vw; max-width: 1060px;"
    };

    const style = sizes[props.size];
    return { style };
  }
};
</script>
