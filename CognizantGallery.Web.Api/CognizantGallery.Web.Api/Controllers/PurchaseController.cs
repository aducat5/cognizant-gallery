using CognizantGallery.Data.Product;
using CognizantGallery.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Controllers
{
    [ApiController]
    [Route("purchase")]
    public class PurchaseController : ControllerBase
    {

        private readonly ILogger<PurchaseController> _logger;
        private readonly WarehouseService _warehouseService;

        public PurchaseController(ILogger<PurchaseController> logger)
        {
            _logger = logger;
        }

        [HttpPost("checkout")]
        public ActionResult<IEnumerable<Warehouse>> Checkout(List<Vehicle> cart)
        {
            try
            {
                //implement checkout logic later.
                //stock check
                //other checks 
                //try purchase
                return Ok(new { IsSuccessful = true });
            }
            catch (System.Exception ex)
            {
                return Ok(new { IsSuccessful = false, ex.Message });
            }
        }
    }
}
