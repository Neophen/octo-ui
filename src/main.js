import * as components from "./components";
import closeMenu from "./directives/o-close-menu.js";
import "./styles/app.scss";
import VCalendar from "v-calendar";

const OctoUI = {
  install(Vue, { iconPacks, closeDirective = "close-menu" }) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }

    if (iconPacks) {
      Vue.prototype.$octoIconPacks = iconPacks;
    }

    Vue.directive(closeDirective, closeMenu);
    // Use v-calendar & v-date-picker components
    Vue.use(VCalendar, {
      componentPrefix: "oc" // Use <vc-calendar /> instead of <v-calendar />
      // ...,                // ...other defaults
    });
  }
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
