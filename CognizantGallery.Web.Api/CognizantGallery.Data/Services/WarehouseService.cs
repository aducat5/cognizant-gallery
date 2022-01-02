using CognizantGallery.Model;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CognizantGallery.Data.Product
{
    public class WarehouseService
    {
        private readonly IMongoCollection<Warehouse> _warehouses;

        public WarehouseService(ICognizantGallerySettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _warehouses = database.GetCollection<Warehouse>(settings.WarehouseCollectionName);
        }
        public async Task<List<Warehouse>> GetAllAsync()
        {
            return await _warehouses.Find(s => true).ToListAsync();
        }
    }
}
