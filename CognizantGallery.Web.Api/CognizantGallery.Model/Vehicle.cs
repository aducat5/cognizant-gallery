using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace CognizantGallery.Model
{
    public record Vehicle
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("make")]
        public string Make { get; set; }

        [BsonElement("model")]
        public string Model { get; set; }

        [BsonElement("year_model")]
        public string YearModel { get; set; }

        [BsonElement("price")]
        public decimal Price { get; set; }
        [BsonElement("date_added")]
        public DateTime CreatedAt { get; set; }
    }
}