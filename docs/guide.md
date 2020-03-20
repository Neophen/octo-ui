
## Install

#### Install with dependencies

`npm i vue @vue/composition-api @popperjs/core portal-vue`

`npm i @mykolasm/octo-ui`


#### Add portal targets somewhere where it makes sense

```html
<portal-target name="octo-modals" transition="o-modal-transition" multiple />
<portal-target name="octo-popups" />
```

[Download default icons and add them to your server somewhere](https://raw.githubusercontent.com/Neophen/octo-ui/master/docs/.vuepress/public/svg/icons_dashboard.svg)

#### Then in your main file add this to install Octo UI

```js
import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';

import OctoUI from '@mykolasm/octo-ui';
import "@mykolasm/octo-ui/dist/octo-ui.css";

export default ({ Vue }) => {

  Vue.use(VueCompositionApi);
  Vue.use(PortalVue)
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });
}
```