using MongoDB.Bson.Serialization.Attributes;

namespace CognizantGallery.Model
{
    public record Location
    {

        [BsonElement("lat")]
        public string Lat { get; set; }

        [BsonElement("long")]
        public string Long { get; set; }
    }
}