<template>
  <o-renderless-tags
    v-model="inlineTags"
    :inputRef="inputRef"
    :maxtags="maxtags"
  >
    <div
      class="octo-control"
      slot-scope="{
        tags,
        inputProps,
        inputEvents,
        removeTag,
        removeTagBtnEvents,
        focusInput,
        isFocused,
        tagText,
      }"
    >
      <div @click="focusInput" class="input octo-inline-tags">
        <div class="octo-inline-tags__flex-row">
          <div
            v-for="(tag, i) in tags"
            :key="i"
            class="octo-inline-tags__flex-item"
          >
            <o-tag @close="removeTag(tag)" closable>
              {{ tagText(tag) }}
            </o-tag>
          </div>
          <div class="octo-inline-tags__flex-item is-input">
            <input
              ref="inputRef"
              class="__input"
              placeholder="Add..."
              v-bind="inputProps"
              v-on="inputEvents"
            />
          </div>
        </div>
      </div>
      <o-h
        size="5"
        v-if="hasCounter && maxtags"
        class="help counter"
        :class="{ 'is-invisible': !isFocused }"
      >
        {{ tags.length }} / {{ maxtags }}
      </o-h>
    </div>
  </o-renderless-tags>
</template>

<script>
import { reactive, toRefs, ref, computed } from "@vue/composition-api";

export default {
  name: "OInlineTagInput",
  model: {
    prop: "tags",
    event: "update",
  },
  props: {
    tags: { required: true },
    removeOnBackspace: { default: true },
    maxtags: {
      type: [Number, String],
      required: false,
    },
    hasCounter: {
      type: Boolean,
      default: false,
    },
    field: {
      type: String,
      default: "value",
    },
    disabled: Boolean,
    ellipsis: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      inputRef: ref(null),
      inlineTags: computed({
        get: () => props.tags,
        set: tags => emit("update", tags),
      }),
    });

    return { ...toRefs(state) };
  },
};
</script>
