import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../Utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example Title"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAttribute(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAttribute(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttribute(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });

    describe("should not render", () => {
      beforeEach(() => {
        const props = {
          desc: "Some text"
        };
        wrapper = shallow(<ListItem {...props} />);
      });

      it("Component is not rendered", () => {
        const component = findByTestAttribute(wrapper, "listItemComponent");
        expect(component.length).toBe(0);
      });
    });
  });
});
