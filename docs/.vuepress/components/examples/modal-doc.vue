<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="control-box">
          <div class="flex">
            <o-button class="mr-2" @click="isSmallOpen = true">open small modal</o-button>
            <o-button class="ml-2" @click="isLargeOpen = true">open large modal</o-button>
            <o-button class="ml-2" @click="isModalOpen = true">open modal</o-button>
          </div>
          <ClientOnly>
            <o-modal :active.sync="isModalOpen" v-slot="{cancel, success}">
              <o-modal-content>
                <o-h class="mb-4">Modal</o-h>
                <o-text>Modal using slot-props from modal</o-text>
                <div class="flex mt-6">
                  <o-button @click="cancel" class="mr-4">Cancel</o-button>
                  <o-button type="is-primary" @click="success">Cancel With success</o-button>
                </div>
              </o-modal-content>
            </o-modal>

            <o-modal :active.sync="isSmallOpen" prevent-click-outside>
              <o-modal-content>
                <o-h class="mb-4">Small modal</o-h>
                <div>
                  <o-datepicker v-model="date" />
                </div>
                <div class="flex mt-6">
                  <o-button @click="isSmallOpen = false" class="mr-4">Cancel</o-button>
                  <o-button
                    :disabled="isLargeOpen"
                    type="is-primary"
                    @click="isLargeOpen = true"
                  >Open large modal</o-button>
                </div>
              </o-modal-content>
            </o-modal>

            <o-modal :active.sync="isLargeOpen">
              <o-modal-content size="large">
                <div>
                  <o-h class="mb-4">Large modal</o-h>
                  <p>Without development, you will lack experiences. We think we know that if you incentivize dynamically, you may have to synergize wirelessly. We understand that it is better to engineer easily. If all of this comes off as mixed-up to you, that's because it is! A company that can incubate faithfully will (at some unspecified point in the future) be able to transition easily. If you productize globally, you may also disintermediate perfectly. What does the term 'structuring'. Our infinitely reconfigurable feature set is unparalleled, but our robust feature set, but our newbie-proof administration and simple configuration. Without niches, you will lack social networks. Without development, you will lack affiliate-based compliance. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the capacity to harness without devaluing our capability to transform without devaluing our power to syndicate. Our end-to-end feature set is unmatched in the DXP space. Is it more important for something to be best-of-breed? The portals factor can be delivered as-a-service to wherever it’s intended to go – mobile. Our end-to-end feature set is unparalleled, but our plug-and-play re-purposing and easy use is usually considered a remarkable achievement. Quick: do you have a plan to become customized.</p>
                  <br />
                  <br />
                  <p>Dem Hunde, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle.</p>
                  <br />
                  <br />
                  <p>Dem Hunde, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle.</p>
                  <br />
                  <br />
                  <p>Dem Hunde, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle.</p>
                  <br />
                  <br />
                  <p>Dem Hunde, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle.</p>
                  <br />
                  <br />
                  <p>Dem Hunde, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle.</p>
                </div>
                <div class="flex mt-6">
                  <o-button @click="isLargeOpen = false" class="mr-4">Cancel</o-button>
                  <o-button
                    :disabled="isSmallOpen"
                    type="is-primary"
                    @click="isSmallOpen = true"
                    class="mr-4"
                  >Open small modal</o-button>
                </div>
              </o-modal-content>
            </o-modal>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      isSmallOpen: false,
      isLargeOpen: false,
      isModalOpen: false,
      date: new Date()
    });

    return { ...toRefs(state) };
  }
};
</script>