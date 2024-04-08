using System.ComponentModel.DataAnnotations;

namespace SportStore.Models
{
    public class StaffPosition
    {
        [Key]
        public int StaffPositionID { get; set; }
        public string? PositionName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public virtual ICollection<Staff> Staffs { get; set; } = new List<Staff>();
    }
}
