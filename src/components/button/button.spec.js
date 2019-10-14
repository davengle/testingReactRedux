import React from "react";
import { findByTestAttribute, checkProps } from "./../../../Utils";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("Shared Button Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };

      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };

      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should Render a button", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
