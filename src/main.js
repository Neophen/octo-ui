import * as components from "./components";
import closeMenu from "./directives/o-close-menu.js";
import "./styles/app.scss";

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
  }
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
