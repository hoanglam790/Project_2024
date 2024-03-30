using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportStore.Models
{
    public class OrderDetail
    {
        [Key]
        public int OrderID { get; set; }

        [Key]
        public int ProductID { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public int TotalPrice {  get; set; }
        public virtual Order? Order { get; set; }

        public virtual Product? Product { get; set; }
    }
}
