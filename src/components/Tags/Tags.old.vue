<template>
  <div class="octo-control">
    <div class="input octo-tags">
      <div class="octo-tags__grid">
        <div v-for="tag in value" :key="tag" class="octo-tags__container">
          <o-tag @close="removeTag(tag)" closable>
            {{ getNormalizedTagText(tag) }}
          </o-tag>
        </div>
        <!-- <div class="octo-tags__container"> -->
        <input
          class="octo-tags__tag-input"
          placeholder="Add..."
          v-model="input"
          @keydown.backspace="handleBackspace"
          @keydown.enter.prevent="addTag"
          @blur="addTag"
        />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/composition-api";

import { getValueByPath } from "../../utils/helpers";

export default {
  name: "OTags",
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    maxtags: {
      type: [Number, String],
      required: false
    },
    field: {
      type: String,
      default: "value"
    },
    allowNew: Boolean,
    allowDuplicates: {
      type: Boolean,
      default: false
    }
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

    const getNormalizedTagText = tag => {
      if (typeof tag === "object") {
        return getValueByPath(tag, this.field);
      }

      return tag;
    };

    return {
      ...toRefs(state),
      newTag,
      removeTag,
      addTag,
      clearInput,
      handleBackspace,
      getNormalizedTagText
    };
  }
};
</script>
