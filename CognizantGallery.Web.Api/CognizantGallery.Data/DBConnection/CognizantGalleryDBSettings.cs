using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Data
{
    public class CognizantGalleryDatabaseSettings : ICognizantGallerySettings
    {
        public string WarehouseCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
