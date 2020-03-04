<script>
export default {
  name: "o-modal-transition",
  functional: true,
  render: function(createElement, context) {
    var data = {
      props: {
        name: "octo-modal-transition",
        mode: "out-in",
        duration: "400",
        appear: true
      }
    };
    return createElement("transition-group", data, context.children);
  }
};
</script>
