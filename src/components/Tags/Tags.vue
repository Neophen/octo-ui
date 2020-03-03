<template>
  <div class="octo-control">
    <div class="octo-input octo-tags">
      <div class="octo-tags__grid">
        <div v-for="tag in value" :key="tag" class="octo-tags__container">
          <div class="octo-tags__tag">
            <o-text size="xs" type="inherit">{{ tag }}</o-text>
            <button
              type="button"
              class="octo-tags__tag-remove"
              @click="removeTag(tag)"
            >
              <o-icon icon="close" class="octo-tags__tag-remove-icon" />
            </button>
          </div>
        </div>
        <input
          class="octo-tags__tag-input"
          placeholder="Add..."
          v-model="input"
          @keydown.backspace="handleBackspace"
          @keydown.enter.prevent="addTag"
          @blur="addTag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/composition-api";

export default {
  name: "OTags",
  inheritAttrs: false,
  props: {
    value: Array
  },
  setup(props, { emit }) {
    const state = reactive({
      input: ""
    });

    const newTag = computed(() => state.input.trim());

    const removeTag = tag => {
      emit(
        "input",
        props.value.filter(t => t !== tag)
      );
    };

    const addTag = () => {
      if (newTag.value.length === 0 || props.value.includes(newTag.value)) {
        return;
      }
      emit("input", [...props.value, newTag.value]);
      clearInput();
    };

    const clearInput = () => {
      state.input = "";
    };

    const handleBackspace = () => {
      if (newTag.value.length === 0) {
        emit("input", props.value.slice(0, -1));
      }
    };

    return {
      ...toRefs(state),
      newTag,
      removeTag,
      addTag,
      clearInput,
      handleBackspace
    };
  }
};
</script>
