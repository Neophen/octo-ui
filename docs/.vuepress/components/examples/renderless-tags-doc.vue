<template>
  <div>
    <div class="control-box">
      <o-h size="3" class="mb-2">Stacked</o-h>

      <o-renderless-tags v-model="tags" :removeOnBackspace="false">
        <div
          class="octo-control"
          slot-scope="{
          tags, 
          inputProps,
          inputEvents,
          removeTag,
          removeTagBtnEvents, 
          }"
        >
          <div class="mb-4">
            <input class="input" placeholder="Add..." v-bind="inputProps" v-on="inputEvents" />
          </div>

          <ul>
            <li v-for="tag in tags" :key="tag" class="flex">
              <span>{{ tag }}</span>
              <button v-on="removeTagBtnEvents(tag)" class="ml-auto">
                <o-icon icon="close-circle" size="is-sm" />
              </button>
            </li>
          </ul>
        </div>
      </o-renderless-tags>
    </div>
    <div class="control-box">
      <o-h size="3" class="mb-2">Simple</o-h>

      <o-renderless-tags v-model="tags" :inputRef="inputRef">
        <div
          class="octo-control"
          slot-scope="{
            tags, 
            inputProps,
            inputEvents,
            removeTag,
            removeTagBtnEvents, 
            focusInput,
          }"
        >
          <div @click="focusInput" class="input octo-tags">
            <div class="octo-tags__flex-row">
              <div v-for="tag in tags" :key="tag" class="octo-tags__flex-item">
                <o-tag @close="removeTag(tag)" closable>{{ tag }}</o-tag>
              </div>
              <div class="octo-tags__flex-item is-input">
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
        </div>
      </o-renderless-tags>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      tags: ["Implemented", "Baby"],
      inputRef: ref(null)
    });

    return { ...toRefs(state) };
  }
};
</script>