using BaseApi;
using BusinessLogic;
using Infrastructure;
using Microsoft.OpenApi.Models;

namespace Admin
{
    public static class ConfigurationService
    {
        public static IServiceCollection AddAdminServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Add admin services here
            // Add Infrastructure services
            var connectionStr = configuration.GetConnectionString("default");
            services.AddBaseApiServices();
            services.AddBusinessLogicConfigurationService();
            services.AddInfrastructureServices(connectionStr);
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:5173")
                           .AllowAnyMethod() // Specify the allowed HTTP methods (GET, POST, PUT, DELETE, etc.)
                           .AllowAnyHeader(); // Specify the allowed headers
                });
            });
            services.AddEndpointsApiExplorer();

            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please insert JWT with Bearer into field",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
               {
                 new OpenApiSecurityScheme
                 {
                   Reference = new OpenApiReference
                   {
                     Type = ReferenceType.SecurityScheme,
                     Id = "Bearer"
                   }
                  },
                  new string[] { }
                }
              });
            });
            services.AddMemoryCache();
            return services;
        }
    }
}
