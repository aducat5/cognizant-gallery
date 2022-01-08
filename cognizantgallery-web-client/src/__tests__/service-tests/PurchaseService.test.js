import "regenerator-runtime/runtime";
import PurchaseService from "../../api/PurchaseService";

it("should return a boolean", () => {
  PurchaseService.checkout().then((result) => {
    expect(typeof result.data.isSuccessfull).toBe("boolean");
  });
});
