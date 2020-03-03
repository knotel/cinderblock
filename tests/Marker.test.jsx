import React from "react";
import { shallow } from "enzyme";
import { Marker } from "../src";

function setup() {
  const props = {
    className: "js-logo"
  };
  const wrapper = shallow(<Marker />);
  return { wrapper, props };
}

describe("Marker Test Suite", () => {
  it("Renders without crashing", () => {
    shallow(<Marker />);
  });
});
