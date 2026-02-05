using BaseApplication.Interface;
using Domain.Entities.NguoiDung;
using Microsoft.EntityFrameworkCore;

namespace BusinessLogic.Interfaces.IDbContext
{
    public interface IAdminDbContext : IBaseDbContext
    {
        public DbSet<nguoi_dung> nguoi_dung { get; set; }
    }
}
