using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Collections.Generic;

namespace CognizantGallery.Model
{
    public record Warehouse
    {
        [BsonId]
        //[BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("location")]
        public Location Location { get; set; }

        [BsonElement("cars")]
        public Car Cars { get; set; }
    }
}
