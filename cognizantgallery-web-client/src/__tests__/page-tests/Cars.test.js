import React from "react";
import renderer from "react-test-renderer";
import Cars from "../../pages/Cars";

it("renders correctly", () => {
  const tree = renderer.create(<Cars />).toJSON();
  expect(tree).toMatchSnapshot();
});
