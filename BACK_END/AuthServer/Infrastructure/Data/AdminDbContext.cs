using BaseInfrastructure.Data;
using BusinessLogic.Interfaces.IDbContext;
using Domain.Entities.NguoiDung;
using EFCore.BulkExtensions;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Reflection;

namespace Infrastructure.Data
{
    public class AdminDbContext : BaseDbContext<AdminDbContext>, IAdminDbContext
    {
        public AdminDbContext(DbContextOptions<AdminDbContext> options, AuditableEntitySaveChangesInterceptor auditableEntitySaveChangesInterceptor) : base(options, auditableEntitySaveChangesInterceptor)
        {
        }


        #region
        public DbSet<nguoi_dung> nguoi_dung { get; set; }

        public DatabaseFacade GetDatabase()
        {
            throw new NotImplementedException();
        }
        #endregion
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Apply configurations from the current assembly
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
