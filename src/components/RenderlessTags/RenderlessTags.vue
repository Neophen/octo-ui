<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  name: "ORenderlessTags",
  model: {
    prop: "tags",
    event: "update"
  },
  props: {
    tags: { required: true },
    inputRef: { default: null },
    removeOnBackspace: { default: true }
  },
  setup(props, { emit }) {
    const state = reactive({
      inputValue: ""
    });

    const newTag = computed(() => state.inputValue.trim());

    const removeTag = tag =>
      emit(
        "update",
        props.tags.filter(t => t !== tag)
      );

    const addTag = () => {
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return;
      }
      emit("update", [...props.tags, newTag.value]);
      clearInput();
    };

    const clearInput = () => {
      state.inputValue = "";
    };

    const handleBackspace = () => {
      if (newTag.value.length === 0) {
        emit("update", props.tags.slice(0, -1));
      }
    };

    const onInput = e => (state.inputValue = e.target.value);

    const focusInput = () => {
      if (props.inputRef) {
        props.inputRef.focus();
      }
    };
    // const getNormalizedTagText = tag => {
    //   if (typeof tag === "object") {
    //     return getValueByPath(tag, this.field);
    //   }

    //   return tag;
    // };

    return {
      ...toRefs(state),
      onInput,
      newTag,
      removeTag,
      addTag,
      clearInput,
      handleBackspace,
      focusInput
      // getNormalizedTagText
    };
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.tags,
      removeTag: this.removeTag,
      removeTagBtnEvents: tag => ({
        click: () => this.removeTag(tag)
      }),
      inputProps: {
        value: this.inputValue
      },
      inputEvents: {
        input: this.onInput,
        blur: this.addTag,
        keydown: e => {
          if (e.key === "Backspace" && this.removeOnBackspace) {
            this.handleBackspace();
          }
          if (e.key === "Enter") {
            e.preventDefault();
            this.addTag();
          }
        }
      },
      focusInput: this.focusInput
    });
  }
};
</script>
