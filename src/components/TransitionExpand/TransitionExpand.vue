<script>
export default {
  name: `OTransitionExpand`,
  functional: true,
  props: {
    grouped: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement, context) {
    const data = {
      props: {
        name: `octo-transition-expand`,
      },
      on: {
        afterEnter(element) {
          element.style.height = `auto`;
        },
        enter(element) {
          const { width } = getComputedStyle(element);
          element.style.width = width;
          element.style.position = `absolute`;
          element.style.visibility = `hidden`;
          element.style.height = `auto`;

          const { height } = getComputedStyle(element);

          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;

          // Force repaint to make sure the
          // animation is triggered correctly.
          getComputedStyle(element).height;

          setTimeout(() => {
            element.style.height = height;
          });
        },
        leave(element) {
          const { height } = getComputedStyle(element);

          element.style.height = height;

          // Force repaint to make sure the
          // animation is triggered correctly.
          getComputedStyle(element).height;

          setTimeout(() => {
            element.style.height = 0;
          });
        },
      },
    };

    return createElement(
      context.props.grouped ? "transition-group" : "transition",
      data,
      context.children,
    );
  },
};
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
