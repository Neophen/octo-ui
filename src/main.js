import * as components from "./components";
import "./styles/app.scss";

const OctoUI = {
  // install(Vue, options = {}) {
  install(Vue, { iconPacks }) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }

    if (iconPacks) {
      Vue.prototype.$octoIconPacks = iconPacks;
    }
  }
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
