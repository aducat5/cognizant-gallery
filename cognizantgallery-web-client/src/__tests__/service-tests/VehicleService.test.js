import "regenerator-runtime/runtime";
import VehicleService from "../../api/VehicleService";

it("should return the given vehicle", () => {
  const expectedData = {
    id: 1,
    make: "Volkswagen",
    model: "Jetta III",
    year_model: 1995,
    price: 12947.52,
    licensed: true,
    date_added: "2018-09-18",
  };

  const warehouseIdToBe = "1";
  const vehicleIdToBe = 1;

  VehicleService.getVehicle(warehouseIdToBe, vehicleIdToBe).then((result) => {
    expect(result.data).toBe(expectedData);
  });
});
