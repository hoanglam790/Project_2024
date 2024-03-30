using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class Account
    {
        [Key]
        public int AccountID { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Vui lòng nhập tên tài khoản hợp lệ")]
        public string? AccountName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Vui lòng nhập mật khẩu hợp lệ")]
        public string? Password { get; set; }

        [Compare(otherProperty: "Password", ErrorMessage = "Mật khẩu bạn vừa nhập không trùng khớp với nhau. Vui lòng thử lại!")]
        public string? ConfirmPassword { get; set; }
        public byte[] PasswordHashing { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public string? VerifyToken { get; set; }
        public DateTime? VeryfiedAt { get; set; }
        public string? ResetPassword { get; set; }
        public DateTime? TokenExpire { get; set; }
        public int? CustomerID { get; set; }
        public int? StaffID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
