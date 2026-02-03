using Domain.Entities.NguoiDung;
using Microsoft.EntityFrameworkCore;

namespace BusinessLogic.Interfaces.IDbContext
{
    public interface IAdminDbContext
    {
        public DbSet<nguoi_dung> nguoi_dung { get; set; }
    }
}
