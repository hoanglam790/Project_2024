using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class Category
    {
        [Key]
        public int CategoryID { get; set; }
        public string? CategoryName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public virtual ICollection<Product> Products { get; set;} = new List<Product>();
    }
}
