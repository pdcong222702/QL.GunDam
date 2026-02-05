using BaseInfrastructure;
using BusinessLogic.Interfaces.IDbContext;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Infrastructure
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, string connectionString)
        {
            // Add infrastructure services here
            services.AddInfrastructureServices();
            services.AddDbContext<AdminDbContext>(builder =>
            {
                builder.UseSqlServer(connectionString, sql =>
                {
                    sql.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
                });
            });

            services.AddScoped<IAdminDbContext>(provider => provider.GetRequiredService<AdminDbContext>());
            return services;
        }
    }
}
