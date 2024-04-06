namespace SportStore.DTO.Product
{
    public class CreateProduct
    {
        public string? ProductName { get; set; }
        public int ProductPrice { get; set; }
        public float Discount { get; set; }
        public string? ProductDescription { get; set; }
        public IFormFile ProductImage { get; set; }
        public int QuantityInStock { get; set; }
        public int? CategoryID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
