using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Model
{
    public class RequestHandler : IRequestHandler
    {
        public int RequestCount { get; set; }
    }

    public interface IRequestHandler
    {
        public int RequestCount { get; set; }
    }
}
