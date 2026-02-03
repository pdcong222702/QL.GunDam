using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.BaseAudiTableEntity
{
    public abstract class BaseAudiTableEntity 
    {
        [Column("ID")]
        public Guid ID { get; set; }
        [Column("NGAY_TAO")]
        public DateTime? NGAY_TAO { get; set; }
        [Column("NGUOI_TAO")]
        public string? NGUOI_TAO { get; set; }
        [Column("NGAY_CHINH_SUA")]
        public DateTime? NGAY_CHINH_SUA { get; set; }
        [Column("NGUOI_CHINH_SUA")]
        public string? NGUOI_CHINH_SUA { get; set; }
    }
}
