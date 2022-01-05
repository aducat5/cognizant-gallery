using CognizantGallery.Data.Product;
using CognizantGallery.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Controllers
{
    [ApiController]
    [Route("vehicle")]
    public class VehicleController : ControllerBase
    {

        private readonly ILogger<VehicleController> _logger;
        private readonly WarehouseService _warehouseService;

        public VehicleController(ILogger<VehicleController> logger, WarehouseService warehouseService)
        {
            _logger = logger;
            _warehouseService = warehouseService;
        }

        [HttpGet("get-vehicle")]
        public ActionResult<IEnumerable<Warehouse>> GetById(string warehouseId, int vehicleId)
        {
            try
            {
                var result = _warehouseService.GetVehicle(warehouseId, vehicleId);
                return Ok(new { IsSuccessful = true, Result = result });
            }
            catch (System.Exception ex)
            {
                return Ok(new { IsSuccessful = false, ex.Message });
            }
        }
    }
}
