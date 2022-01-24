using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api.Model
{
    public class RequestHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private IRequestHandler _requestHandler;

        public RequestHandlerMiddleware(RequestDelegate next, IRequestHandler requestHandler)
        {
             _requestHandler = requestHandler;
            _next = next;
        }

        // IMessageWriter is injected into InvokeAsync
        public async Task InvokeAsync(HttpContext httpContext)
        {
            _requestHandler.RequestCount = _requestHandler.RequestCount + 1;
            await _next(httpContext);
        }

    }

    public static class RequestHandlerMiddlewareExtensions
    {
        public static IApplicationBuilder UseRequestHandlerMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RequestHandlerMiddleware>();
        }
    }
}
