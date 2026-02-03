using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.NguoiDung
{
    [Table("nguoi_dung", Schema = "admin")]
    public partial class nguoi_dung : Domain.Entities.BaseAudiTableEntity.BaseAudiTableEntity
    {
        [Column("TAI_KHOAN")]
        public string tai_khoan { get; set; }
        [Column("MAT_KHAU")]
        public string mat_khau { get; set; }
        [Column("SALT_CODE")]
        public string salt_code { get; set; }
        [Column("TEN")]
        public string ten { get; set; }
        [Column("EMAIL")]
        public string? email { get; set; }
        [Column("SO_DIEN_THOAI")]
        public string? so_dien_thoai { get; set; }
        [Column("IS_SUPER_ADMIN")]
        public bool is_super_admin { get; set; }
        [Column("GIOI_TINH")]
        public int? gioi_tinh { get; set; }
        [Column("ANH_DAI_DIEN_ID")]
        public Guid? anh_dai_dien_id { get; set; }// tep_dinh_kem_id
        [Column("DON_VI_ID")]
        public Guid? don_vi_id { get; set; }
        [Column("LOAI_DON_VI")]
        public int? loai_don_vi { get; set; }
        [Column("SO_LAN_DANG_NHAP_THAT_BAI")]
        public int? so_lan_dang_nhap_that_bai { get; set; }
        [Column("THOI_GIAN_CAP_NHAT_MAT_KHAU")]
        public DateTime? thoi_gian_cap_nhat_mat_khau { get; set; }
        [Column("THOI_GIAN_TAM_KHOA_TAI_KHOAN")]
        public DateTime? thoi_gian_tam_khoa_tai_khoan { get; set; }

    }
}
