using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string? ProductName { get; set; }
        public int ProductPrice { get; set; }
        public float Discount { get; set; }
        public string? ProductDescription { get; set; }
        public string? ProductImage { get; set; }
        public int QuantityInStock { get; set; }
        public int? CategoryID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public virtual Category? Category { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
    }
}
