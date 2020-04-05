<template>
  <div class="w-screen h-screen flex flex-col" style="background: #FBFBFB">
    <nav class="h-16 bg-white border-b flex-shrink-0 flex items-center">
      <div class="flex items-center mx-4">
        <o-icon icon="octafest" pack="site_logos" class="w-10 h-10 mr-4" />
        <o-h size="3">Octo UI</o-h>
        <p class="ml-2">{{version}}</p>
      </div>
      <o-button squared class="ml-auto" icon="home" icon-pack="site" :type="buttonType('home')">Home</o-button>
      <o-button squared class="mx-2" icon="setup" icon-pack="site" :type="buttonType('setup')">Setup</o-button>
      <o-button
        squared
        class="ml-2"
        icon="components"
        icon-pack="site"
        :type="buttonType('components')"
      >Components</o-button>
      <o-button squared class="mx-2" icon="git" icon-pack="site" :type="buttonType('git')">Git</o-button>
    </nav>
    <div class="flex-1 flex min-h-0">
      <aside class="mr-8 py-6 pl-6 flex">
        <o-menu :items="menuItems" class="overflow-y-auto" />
      </aside>
      <main class="flex-1 overflow-y-auto py-6" scroll-region>
        <div class="mr-6 bg-muted-100 rounded-large p-10 min-h-full">
          <Content class="theme-default-content" />
        </div>
      </main>
      <aside v-if="$slots.aside" class="ml-8 py-6 pr-6 flex flex-col flex-shrink-0">
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
        return "is-default";
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