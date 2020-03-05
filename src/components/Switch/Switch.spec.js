import { shallowMount } from "@vue/test-utils";
import OSwitch from "./index";

let wrapper;

describe("OSwitch", () => {
  beforeEach(() => {
    wrapper = shallowMount(OSwitch);
  });

  it("is called", () => {
    expect(wrapper.name()).toBe("OSwitch");
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders input element by default", () => {
    expect(wrapper.contains("input")).toBeTruthy();
    expect(wrapper.classes()).toContain("octo-switch");
  });

  it("updates internal value when v-model is changed", done => {
    const newValue = "switch value";
    wrapper.setProps({ value: newValue });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.newValue).toBe(newValue);
      done();
    });
  });

  it("emit input event when computedValue is set", () => {
    const newValue = "switch value";
    wrapper.vm.computedValue = newValue;
    const valueEmitted = wrapper.emitted()["input"][0];
    expect(wrapper.vm.newValue).toBe(newValue);
    expect(valueEmitted).toContainEqual(newValue);
  });

  it("method focus() gives focus to the input element", done => {
    wrapper.vm.$refs.input.focus = jest.fn();
    wrapper.vm.focus();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$refs.input.focus).toHaveBeenCalled();
      done();
    });
  });
});
