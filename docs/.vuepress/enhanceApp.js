import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';

import OctoUI from '../../src/main.js';
import "../../src/styles/app.scss";


// export default ({ Vue, options, router, siteData }) => {
export default ({ Vue }) => {

  Vue.use(VueCompositionApi);
  Vue.use(PortalVue)
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });
}