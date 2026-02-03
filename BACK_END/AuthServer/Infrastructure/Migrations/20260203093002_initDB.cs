using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class initDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "admin");

            migrationBuilder.CreateTable(
                name: "nguoi_dung",
                schema: "admin",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TAI_KHOAN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MAT_KHAU = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SALT_CODE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TEN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EMAIL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SO_DIEN_THOAI = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IS_SUPER_ADMIN = table.Column<bool>(type: "bit", nullable: false),
                    GIOI_TINH = table.Column<int>(type: "int", nullable: true),
                    ANH_DAI_DIEN_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DON_VI_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LOAI_DON_VI = table.Column<int>(type: "int", nullable: true),
                    SO_LAN_DANG_NHAP_THAT_BAI = table.Column<int>(type: "int", nullable: true),
                    THOI_GIAN_CAP_NHAT_MAT_KHAU = table.Column<DateTime>(type: "datetime2", nullable: true),
                    THOI_GIAN_TAM_KHOA_TAI_KHOAN = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NGAY_TAO = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NGUOI_TAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NGAY_CHINH_SUA = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NGUOI_CHINH_SUA = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_nguoi_dung", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "nguoi_dung",
                schema: "admin");
        }
    }
}
