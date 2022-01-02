using CognizantGallery.Data;
using CognizantGallery.Data.Product;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Tests
{
    public class Tests
    {
        private WarehouseService _service;

        [SetUp]
        public void Setup()
        {
            var settings = Util.GetDBSettings();
            _service = new WarehouseService(settings);
        }

        [Test]
        public async Task GetAllTestAsync()
        {
            var warehouses = await _service.GetAllAsync();
            Assert.IsNotNull(warehouses);
        }
    }
}