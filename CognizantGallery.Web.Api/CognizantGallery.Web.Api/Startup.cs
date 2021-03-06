using CognizantGallery.Data;
using CognizantGallery.Data.Product;
using CognizantGallery.Web.Api.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CognizantGallery.Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            // requires using Microsoft.Extensions.Options
            services.Configure<CognizantGalleryDatabaseSettings>(
                Configuration.GetSection(nameof(CognizantGalleryDatabaseSettings)));

            services.AddSingleton<ICognizantGallerySettings>(sp =>
                sp.GetRequiredService<IOptions<CognizantGalleryDatabaseSettings>>().Value);

            services.AddSingleton<IRequestHandler, RequestHandler>();

            //adding warehouse service
            services.AddScoped<WarehouseService>();

            //adding controllers
            services.AddControllers();

            //enabling cors for client app
            services.AddCors(o => o.AddPolicy("LowCorsPolicy", builder => {
                builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
            }));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "CognizantGallery.Web.Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "CognizantGallery.Web.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            //use the new cors policy
            app.UseCors("LowCorsPolicy");

            app.UseAuthorization();

            app.UseRequestHandlerMiddleware();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            

            //app.Use(async (context, next) =>
            //{

            //    // Call the next delegate/middleware in the pipeline
            //    await next();
            //});
        }
    }
}
