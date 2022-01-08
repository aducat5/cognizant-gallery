import React from "react";
import renderer from "react-test-renderer";
import EmptyView from "../../components/EmptyView";

it("renders correctly", () => {
  const tree = renderer.create(<EmptyView />).toJSON();
  expect(tree).toMatchSnapshot();
});
