namespace SportStore.DTO.Customer
{
    public class CreateCustomer
    {
        public string? AccountName { get; set; }
        public string? Password { get; set; }
        public string? ConfirmPassword { get; set; }
        public string? CustomerName { get; set; }
        public string? CustomerEmail { get; set; }
        public string? CustomerPhone { get; set; }
        public string? CustomerAddress { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
