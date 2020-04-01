<template>
  <o-renderless-tags
    v-model="inlineTags"
    :inputRef="inputRef"
    :maxtags="maxtags"
    :removeOnBackspace="false"
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
      <input
        class="input"
        placeholder="Add..."
        v-bind="inputProps"
        v-on="inputEvents"
        ref="inputRef"
      />
      <ul class="octo-stacked-tags" v-if="tags.length > 0">
        <li
          v-for="(tag, i) in tags"
          :key="i"
          class="octo-stacked-tags__tag-row"
        >
          <button class="__btn" v-on="removeTagBtnEvents(tag, true)">
            <o-icon v-if="tag.icon" :icon="tag.icon" class="__label-icon" />
            <o-text type="is-inherit" class="__label">
              {{ tagText(tag) }}
            </o-text>
            <o-icon icon="close-circle" class="__close-icon" />
          </button>
        </li>
      </ul>
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
  name: "OStackedTagInput",
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
