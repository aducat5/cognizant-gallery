using CognizantGallery.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Tests
{
    public static class Util
    {
        private static CognizantGalleryDatabaseSettings _settings;

        public static CognizantGalleryDatabaseSettings GetDBSettings()
        {
            if (_settings != null) return _settings;

            _settings = new CognizantGalleryDatabaseSettings()
            {
                ConnectionString = "mongodb+srv://cognizant-user:TestUser123--@sandbox.mm9lf.mongodb.net/cognizantGallery?retryWrites=true&w=majority?connect=replicaSet",
                DatabaseName = "cognizantGallery",
                WarehouseCollectionName = "warehouses"
            };

            return _settings;
        }


    }
}
