using CognizantGallery.Model;
using MongoDB.Bson;
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
            return await _warehouses.Find(w => true).ToListAsync();
        }
        public Vehicle GetVehicle(string warehouseId, int vehicleId)
        {
            try
            {
                return _warehouses.Find(w => w.Id == warehouseId).FirstOrDefault().Cars.Vehicles.Find(v => v.Id == vehicleId);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }
        

    }
}
