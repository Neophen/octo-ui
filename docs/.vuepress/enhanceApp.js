import VueCompositionApi from '@vue/composition-api';

import OctoUI from '../../src/main.js';
import "../../src/styles/app.scss";


// export default ({ Vue, options, router, siteData }) => {
export default ({ Vue, options, siteData }) => {

  // console.log(Vue);
  // console.log(siteData);
  Vue.use(VueCompositionApi);
  Vue.use(OctoUI, {
    iconPacks: {
      dashboard: '/svg/icons_dashboard.svg',
    }
  });
}