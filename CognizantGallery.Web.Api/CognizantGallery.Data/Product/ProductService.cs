using CognizantGallery.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Data.Product
{
    public class ProductService
    {
        private readonly IMongoCollection<Vehicle> _vehicles;

        public ProductService(ICognizantGallerySettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            var warehouses = database.GetCollection<Vehicle>(settings.WarehouseCollectionName);
        }
        public async Task<List<Vehicle>> GetAllAsync()
        {
            return await _vehicles.Find(s => true).ToListAsync();
        }
        public async Task<Vehicle> GetByIdAsync(string id)
        {
            return await _vehicles.Find<Vehicle>(s => s.Id == id).FirstOrDefaultAsync();
        }

    }
}
