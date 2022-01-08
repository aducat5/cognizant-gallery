import "regenerator-runtime/runtime";
import WarehouseService from "../../api/WarehouseService";

it("should return an array > 0", () => {
  WarehouseService.getAll().then((result) => {
    expect(result.data.length).toBeGreaterThan(0);
  });
});
