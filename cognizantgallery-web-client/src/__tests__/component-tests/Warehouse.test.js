import React from "react";
import renderer from "react-test-renderer";
import Warehouse from "../../components/Warehouse";

it.skip("renders correctly", () => {
  const sampleWarehouse = {
    id: "1",
    name: "Warehouse A",
    location: {
      lat: "47.13111",
      long: "-61.54801",
    },
    cars: {
      location: "West wing",
      vehicles: [
        {
          id: 1,
          make: "Volkswagen",
          model: "Jetta III",
          year_model: 1995,
          price: 12947.52,
          licensed: true,
          date_added: "2018-09-18",
        },
      ],
    },
  };
  const tree = renderer
    .create(<Warehouse key={sampleWarehouse.id} data={sampleWarehouse} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
