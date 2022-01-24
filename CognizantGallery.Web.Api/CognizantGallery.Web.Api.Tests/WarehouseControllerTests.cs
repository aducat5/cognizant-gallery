using CognizantGallery.Data;
using CognizantGallery.Data.Product;
using CognizantGallery.Web.Api.Controllers;
using CognizantGallery.Web.Api.Model;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Tests
{
    public class WarehouseControllerTests
    {
        private WarehouseController _warehouseController;

        [SetUp]
        public void Setup()
        {
            var settings = Util.GetDBSettings();
            var service = new WarehouseService(settings);
            var requestHandler = new RequestHandler();
            _warehouseController = new WarehouseController(service, requestHandler);
        }

        [Test]
        public async Task GetAllTestAsync()
        {
            var warehouses = await _warehouseController.GetAll();
            Assert.IsNotNull(warehouses);
        }

    }
}