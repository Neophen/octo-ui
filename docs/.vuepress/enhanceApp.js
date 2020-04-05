import VueCompositionApi from '@vue/composition-api';
import PortalVue from 'portal-vue';

import OctoUI from '../../src/main.js';
import "../../src/styles/app.scss";

const { version } = require('../../package');

export default ({ Vue }) => {
  
  
  Vue.mixin({
    computed: {
      $version: function() {
        return version
      }
    }
  })
  Vue.use(VueCompositionApi);
  Vue.use(PortalVue)
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
      site_logos: '/svg/icons_site-logos.svg',
      site: '/svg/icons_site.svg',
    }
  });
}