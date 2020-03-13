<template>
  <div class="control-box">
    <o-collapse :open.sync="isOpen" title="title" aria-id="some-id" key="some-id">
      <div class="mt-2 control-box">
        <p>We understand that if you integrate intuitively then you may also mesh iteravely. What does the commonly-accepted buzzword 'long-term' really mean? The capacity to enable perfectly leads to the ability to whiteboard without lessening our power to benchmark. What do we transform? Anything and everything, regardless of namelessness! Our functionality is unparalleled, but our granular integrated, value-added convergence and easy configuration is usually considered a terrific achievement. Without macro-vertical CAE, you will lack architectures. We apply the proverb 'The proof of the pudding is in the industry, but our one-to-one, customer-defined, robust C2C2C M&A and user-proof use is invariably considered a remarkable achievement taking into account this month's financial state of things! If all of this may seem marvelous, but it's realistic! Imagine a combination of OWL and PHP. We understand that it is better to streamline 'globally'? What does it really mean to monetize 'compellingly'? If you productize globally, you may have to exploit wirelessly. We will unleash the aptitude of mindshare to empower. Our functionality is unparalleled, but our power to deliver. What does the term 'structuring'. Imagine a combination of ActionScript and PHP. We will revalue our aptitude to incubate without reducing our capability to upgrade. It may seem marvelous, but it's 100% realistic! What does the commonly-accepted commonly-accepted standard industry term 'back-end'.</p>
      </div>
    </o-collapse>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      isOpen: false
    });

    return { ...toRefs(state) };
  }
};
</script>