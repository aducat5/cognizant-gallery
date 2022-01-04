using CognizantGallery.Data.Product;
using CognizantGallery.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Controllers
{
    [ApiController]
    [Route("warehouse")]
    public class WarehouseController : ControllerBase
    {

        private readonly ILogger<WarehouseController> _logger;
        private readonly WarehouseService _warehouseService;

        public WarehouseController(ILogger<WarehouseController> logger, WarehouseService warehouseService)
        {
            _logger = logger;
            _warehouseService = warehouseService;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<IEnumerable<Warehouse>>> GetAll()
        {
            try
            {

                var warehouses = await _warehouseService.GetAllAsync();
                return Ok(warehouses);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }
    }
}
