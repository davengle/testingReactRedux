import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttribute, checkProps } from "../../../Utils";
import expectExport from "expect";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headlline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("With props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };

      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expectExport(component.length).toBe(1);
    });

    it("Should render an H1", () => {
      const h1 = findByTestAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttribute(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Without props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttribute(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
