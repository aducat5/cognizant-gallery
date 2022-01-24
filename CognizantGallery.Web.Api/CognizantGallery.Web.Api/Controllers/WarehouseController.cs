using CognizantGallery.Data.Product;
using CognizantGallery.Model;
using CognizantGallery.Web.Api.Model;
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
        private IRequestHandler _requestHandler;

        public WarehouseController(ILogger<WarehouseController> logger, WarehouseService warehouseService, IRequestHandler requestHandler)
        {
            _logger = logger;
            _warehouseService = warehouseService;
            _requestHandler = requestHandler;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<IEnumerable<Warehouse>>> GetAll()
        {
            var warehouses = await _warehouseService.GetAllAsync();
            var response = new ResponseModel()
            {
                Data = warehouses,
                RequestCount = _requestHandler.RequestCount
            };
            return Ok(response);
        }
    }
}
