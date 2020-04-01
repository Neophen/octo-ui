<script>
import { reactive, computed, toRefs } from "@vue/composition-api";
export default {
  name: "ORenderlessTags",
  model: {
    prop: "tags",
    event: "update",
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
    inputRef: {
      default: null,
    },
    maxtags: {
      type: [Number, String],
      required: false,
    },
    removeOnBackspace: {
      type: Boolean,
      default: true,
    },
    field: {
      type: String,
      default: "label",
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      inputValue: "",
      isFocused: false,
    });

    const newTag = computed(() => state.inputValue.trim());

    const removeTag = tag =>
      emit(
        "update",
        props.tags.filter(t => t !== tag),
      );

    const addTag = () => {
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return;
      }

      if (props.maxtags && props.tags.length + 1 > props.maxtags) {
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

    const getValueByPath = (obj, path) => {
      const value = path.split(".").reduce((o, i) => (o ? o[i] : null), obj);
      return value;
    };

    const tagText = tag =>
      typeof tag === "object" ? getValueByPath(tag, props.field) : tag;

    return {
      ...toRefs(state),
      onInput,
      newTag,
      removeTag,
      addTag,
      clearInput,
      handleBackspace,
      focusInput,
      tagText,
    };
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.tags,
      removeTag: this.removeTag,
      isFocused: this.isFocused,
      tagText: this.tagText,
      removeTagBtnEvents: tag => ({
        click: () => this.removeTag(tag),
      }),
      inputProps: {
        value: this.inputValue,
      },
      inputEvents: {
        input: this.onInput,
        focus: () => {
          this.isFocused = true;
        },
        blur: () => {
          this.isFocused = false;
          this.addTag();
        },
        keydown: e => {
          if (e.key === "Backspace" && this.removeOnBackspace) {
            this.handleBackspace();
          }
          if (e.key === "Enter") {
            e.preventDefault();
            this.addTag();
          }
        },
      },
      focusInput: this.focusInput,
    });
  },
};
</script>
