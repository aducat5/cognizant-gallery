using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Model
{
    public record Car
    {
        public string Location { get; set; }
        public List<Vehicle> Vehicles { get; set; }
    }
}
