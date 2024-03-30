using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportStore.Models
{
    public class News
    {
        [Key]
        public int NewsID { get; set; }
        public string? NewsName { get; set; }
        public string? NewsDescription { get; set; }
        public int? StaffID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public virtual Staff? Staff { get; set; }
    }
}
