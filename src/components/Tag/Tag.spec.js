import { shallowMount } from "@vue/test-utils";
import OTag from "./Tag";

let wrapper;

describe("OTag", () => {
  beforeEach(() => {
    wrapper = shallowMount(OTag);
  });

  it("is called", () => {
    expect(wrapper.name()).toBe("OTag");
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("render correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emit close event when closing if not disabled", () => {
    wrapper.setProps({ disabled: false });

    const close = jest.fn();
    wrapper.vm.$on("close", close);
    wrapper.vm.close();

    wrapper.setProps({ disabled: true });
    wrapper.vm.close();

    expect(close).toHaveBeenCalledTimes(1);
  });
});
