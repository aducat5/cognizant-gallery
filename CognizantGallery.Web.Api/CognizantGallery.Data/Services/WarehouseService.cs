using CognizantGallery.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
            var _warehouses = database.GetCollection<Vehicle>(settings.WarehouseCollectionName);
        }
        public async Task<List<Warehouse>> GetAllAsync()
        {
            return await _warehouses.Find(s => true).ToListAsync();
        }
    }
}
