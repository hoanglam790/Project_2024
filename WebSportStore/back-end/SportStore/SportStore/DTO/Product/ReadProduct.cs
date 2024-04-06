namespace SportStore.DTO.Product
{
    public class ReadProduct
    {
        public int ProductID { get; set; }
        public string? ProductName { get; set; }
        public int ProductPrice { get; set; }
        public float Discount { get; set; }
        public string? ProductDescription { get; set; }
        public string? ProductImage { get; set; }
        public int QuantityInStock { get; set; }
        public string? CategoryName { get; set; }
    }
}
