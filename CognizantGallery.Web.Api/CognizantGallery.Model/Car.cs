using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Model
{
    public record Car
    {
        private List<Vehicle> vehicles;

        [BsonElement("location")]
        public string Location { get; set; }

        [BsonElement("vehicles")]
        public List<Vehicle> Vehicles
        {
            get => vehicles; 
            set
            {
                vehicles = value.OrderByDescending(vehicle => vehicle.CreatedAt).ToList();
            }
        }
    }
}
