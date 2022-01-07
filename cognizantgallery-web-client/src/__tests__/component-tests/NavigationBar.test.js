import React from "react";
import renderer from "react-test-renderer";
import NavigationBar from "../../components/NavigationBar";

it("renders correctly", () => {
  const tree = renderer.create(<NavigationBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
