import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VehicleService from "../api/VehicleService";
import Vehicle from "../components/Vehicle";

export default function Details() {
  const { warehouseId } = useParams();
  const { vehicleId } = useParams();
  const [vehicleData, setVehicleData] = useState({});

  useEffect(() => {
    VehicleService.getVehicle(warehouseId, vehicleId).then(function (response) {
      setVehicleData(response.result);
    });
  }, []);

  return <Vehicle key={vehicleData.id} data={vehicleData} />;
}
