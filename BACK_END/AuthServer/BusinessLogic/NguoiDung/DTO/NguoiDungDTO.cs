using AutoMapper;
using Domain.Entities.NguoiDung;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessLogic.NguoiDung.DTO
{
    public class NguoiDungDTO
    {
        public Guid ID { get; set; }
        public string tai_khoan { get; set; }
        public string mat_khau { get; set; }
        public string salt_code { get; set; }
        public string ten { get; set; }
        public string? email { get; set; }
        public string? so_dien_thoai { get; set; }
        public bool is_super_admin { get; set; }
        public int? gioi_tinh { get; set; }
        public Guid? anh_dai_dien_id { get; set; }
        public Guid? don_vi_id { get; set; }
        public int? loai_don_vi { get; set; }
        public int? so_lan_dang_nhap_that_bai { get; set; }
        public DateTime? thoi_gian_cap_nhat_mat_khau { get; set; }
        public DateTime? thoi_gian_tam_khoa_tai_khoan { get; set; }
    }

    public class NguoiDungProfile : Profile
    {
        public NguoiDungProfile()
        {
            CreateMap<nguoi_dung, NguoiDungDTO>();
        }
    }
}
