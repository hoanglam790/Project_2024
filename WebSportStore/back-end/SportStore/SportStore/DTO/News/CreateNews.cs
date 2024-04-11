using SportStore.DTO.Staff;

namespace SportStore.DTO.News
{
    public class CreateNews
    {
        public string? NewsName { get; set; }
        public string? NewsDescription { get; set; }
        public int? StaffID { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
