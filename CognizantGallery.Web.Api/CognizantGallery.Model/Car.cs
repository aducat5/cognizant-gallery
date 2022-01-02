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

        [BsonElement("location")]
        public string Location { get; set; }

        [BsonElement("vehicles")]
        public List<Vehicle> Vehicles { get; set; }
    }
}
