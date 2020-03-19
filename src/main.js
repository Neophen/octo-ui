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

    Vue.prototype.$modalo = {
      show(name) {
        location.hash = name;
      },

      hide() {
        location.hash = "#";
      }
    };

    OctoUI.events = new Vue();

    Vue.prototype.$dialog = {
      confirm(params) {
        return this.show({
          ...params,
          ...{ state: "confirm" }
        });
      },

      danger(params) {
        return this.show({
          ...params,
          ...{ state: "danger" }
        });
      },

      message(params) {
        return this.show({
          ...{ state: "message", confirm: "ok" },
          ...params
        });
      },

      show(params) {
        return new Promise(resolve => {
          OctoUI.events.$emit("show-dialog", params);
          OctoUI.events.$on("confirmed", confirmed => {
            resolve(confirmed);
          });
        });
      }
    };

    Vue.directive(closeDirective, closeMenu);
  }
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
