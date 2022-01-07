import React from "react";
import renderer from "react-test-renderer";
import Vehicle from "../../components/EmptyView";

it("renders correctly", () => {
  const sampleWarehouseId = "1";
  const sampleVehicle = {
    id: 1,
    make: "Volkswagen",
    model: "Jetta III",
    year_model: 1995,
    price: 12947.52,
    licensed: true,
    date_added: "2018-09-18",
  };
  const tree = renderer
    .create(
      <Vehicle
        key={sampleVehicle.id}
        data={sampleVehicle}
        warehouseId={sampleWarehouseId}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
