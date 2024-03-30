using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class Staff
    {
        [Key]
        public int StaffID { get; set; }
        public string? Name { get; set; }

        [Phone(ErrorMessage = "Vui lòng nhập số điện thoại hợp lệ")]
        [StringLength(maximumLength: 11, MinimumLength = 1, ErrorMessage = "Độ dài của số điện thoại phải nằm trong khoảng 1 đến 11")]
        public string? Phone { get; set; }

        [EmailAddress(ErrorMessage = "Vui lòng nhập địa chỉ email hợp lệ")]
        public string? Email { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int? PositionID { get; set; }
        public virtual StaffPosition? StaffPosition { get; set; }
        public virtual ICollection<News> News { get; set; } = new List<News>();
        public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
    }
}
