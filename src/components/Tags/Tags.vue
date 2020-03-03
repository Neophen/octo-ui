<template>
  <div>
    <div class="input-field w-full" :class="error ? '-error' : '-idle'">
      <div class="flex flex-wrap items-center -mx-2 -mt-2">
        <div v-for="tag in value" :key="tag" class="pt-2 pl-2 tag-container">
          <div class="tag-input-tag">
            <span>{{ tag }}</span>
            <button
              type="button"
              class="ml-2 text-base leading-base"
              @click="removeTag(tag)"
            >
              &times;
            </button>
          </div>
        </div>
        <input
          class="tag-input-text flex-1 ml-2 mt-2 focus:outline-none"
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
    name: String,
    field: Object,
    disabled: Boolean,
    error: String,
    value: null
  },
  setup(props, { emit }) {
    const state = reactive({
      input: ""
    });

    const newTag = computed(() => state.input.trim());

    const removeTag = tag => {
      emit(
        "input",
        tag
        // props.value.filter(t => t !== tag)
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
