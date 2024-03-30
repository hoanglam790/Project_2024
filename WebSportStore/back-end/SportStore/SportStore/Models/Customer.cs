using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        public string? CustomerName { get; set; }

        [Required(AllowEmptyStrings = true)]
        [EmailAddress(ErrorMessage = "Vui lòng nhập địa chỉ email hợp lệ")]
        public string? CustomerEmail { get; set; }

        [Phone(ErrorMessage = "Vui lòng nhập số điện thoại hợp lệ")]
        [StringLength(maximumLength: 11, MinimumLength = 1, ErrorMessage = "Độ dài của số điện thoại phải nằm trong khoảng 1 đến 11")]
        public string? CustomerPhone { get; set; }
        public string? CustomerAddress { get; set; }       
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
        public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
    }
}
