using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CognizantGallery.Model
{
    public record Warehouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public List<Car> Cars { get; set; }
    }
}
