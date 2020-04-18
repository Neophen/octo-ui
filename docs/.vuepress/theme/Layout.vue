<template>
  <div class="flex flex-col w-screen h-screen bg-muted-400" style="background: #fbfbfb;">
    <nav class="flex items-center flex-shrink-0 h-16 bg-white border-b">
      <div class="flex items-center mx-4">
        <o-icon icon="octafest" pack="site_logos" class="w-10 h-10 mr-4" />
        <o-h size="3">Octo UI</o-h>
        <p class="ml-2">{{version}}</p>
      </div>
      <btn squared class="ml-auto" label icon="home" icon-pack="site" :type="buttonType('home')">Home</btn>
      <btn squared class="ml-2" label icon="setup" icon-pack="site" :type="buttonType('setup')">Setup</btn>
      <btn
        squared
        class="ml-2"
        label icon="components"
        icon-pack="site"
        :type="buttonType('components')"
      >Components</btn>
      <btn squared class="mx-2" label icon="git" icon-pack="site" :type="buttonType('git')">Git</btn>
    </nav>
    <div class="flex flex-1 min-h-0">
      <aside class="flex py-6 pl-6 mr-8">
        <o-menu :items="menuItems" class="overflow-y-auto" />
      </aside>
      <main class="flex-1 py-6 overflow-y-auto" scroll-region>
        <div class="min-h-full p-10 mr-6 bg-muted-100 rounded-large">
          <Content class="theme-default-content" />
        </div>
      </main>
      <aside v-if="$slots.aside" class="flex flex-col flex-shrink-0 py-6 pr-6 ml-8">
        <slot name="aside" />
      </aside>
    </div>

    <!-- portal targets -->
    <portal-target name="octo-modals" transition="o-modal-transition" multiple />
    <portal-target name="octo-popups" />
    <portal-target name="octo-popups-multiple" multiple />
    <o-dialog />
  </div>
</template>

<script>
import { watch, reactive, computed, toRefs } from "@vue/composition-api";

export default {
  name: "Layout",
  setup(props, { root }) {
    const state = reactive({
      selectedItem: "overview",
      buttonType: computed(() => type => {
        return "default";
      }),
    });

    // console.log(root.$site.pages);
    // console.log(root.$themeLocaleConfig.sidebar['/components/'][0].children);

    const goTo = (route, key) => () => {
      state.selectedItem = key;
      root.$router.push(route);
    };

    const isUrl = key => {
      return state.selectedItem === key;
    };

    const navItems = computed(() => {
      const pages = root.$site.pages;
      return root.$themeLocaleConfig.sidebar["/components/"][0].children.map(
        key => {
          const page = pages.find(
            page => page.title.toLowerCase().replace(/ /g, "-") === key,
          );

          return {
            action: goTo(page.path, page.key),
            isActive: isUrl(page.key),
            icon: key,
            iconPack: "site",
            title: page.title,
          };
        },
      );
    });

    const menuItems = computed(() => {
      const pages = root.$site.pages;
      return root.$themeLocaleConfig.sidebar["/components/"][0].children.map(
        key => {
          const page = pages.find(
            page => page.title.toLowerCase().replace(/ /g, "-") === key,
          );

          return {
            action: goTo(page.path, page.key),
            isActive: isUrl(page.key),
            icon: key,
            iconPack: "site",
            title: page.title,
          };
        },
      );
    });

    return {
      ...toRefs(state),
      menuItems,
      version: root.$version,
    };
  },
};
</script>