namespace CognizantGallery.Model
{
    public interface ICognizantGallerySettings
    {
        string WarehouseCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}