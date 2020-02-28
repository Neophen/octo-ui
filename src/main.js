import * as components from "./components";

const OctoUI = {
  // install(Vue, options = {}) {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
