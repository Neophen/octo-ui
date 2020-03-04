function addListeners(el) {
  el.addEventListener("click", onClick);
}

function removeListeners(el) {
  el.removeEventListener("click", onClick);
}

function onClick(event) {
  event.closeOctoMenu = true;
}

export default {
  bind(el, { value }) {
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  update(el, { value, oldValue }) {
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind(el) {
    removeListeners(el);
  }
};
