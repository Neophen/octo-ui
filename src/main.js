import * as components from "./components";
import closeMenu from "./directives/o-close-menu.js";
import "./styles/app.scss";
import "./styles/app.css";

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

    OctoUI.events = new Vue();

    const normalizeParams = (message, params) => {
      if (typeof message === "string") {
        return {
          title: message,
          ...params,
        };
      }
      return {
        ...params,
        ...message,
      };
    };

    Vue.prototype.$dialog = {
      confirm(message, params = {}) {
        params = normalizeParams(message, params);
        return this.show({
          ...params,
          ...{ state: "confirm" },
        });
      },

      danger(message, params = {}) {
        params = normalizeParams(message, params);
        return this.show({
          ...params,
          ...{ state: "danger" },
        });
      },

      serious(params) {
        return this.show({
          ...params,
          ...{ state: "serious" },
        });
      },

      message(message, params = {}) {
        params = normalizeParams(message, params);
        return this.show({
          ...{ state: "message", confirm: "ok" },
          ...params,
        });
      },

      show(params) {
        return new Promise(resolve => {
          OctoUI.events.$emit("show-dialog", params);
          OctoUI.events.$on("confirmed", confirmed => {
            resolve(confirmed);
          });
        });
      },
    };

    Vue.directive(closeDirective, closeMenu);
  },
};

export default OctoUI;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OctoUI);
}
