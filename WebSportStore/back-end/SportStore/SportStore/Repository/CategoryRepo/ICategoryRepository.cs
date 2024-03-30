using SportStore.DTO.Category;

namespace SportStore.Repository.CategoryRepo
{
    public interface ICategoryRepository
    {
        Task<List<ReadCategory>> GetAllCategories();
        Task<ReadCategory> GetCategoriesByID(int cateID);
        Task<int> AddCategories(CreateCategory categoryDTO);
        Task UpdateCategories(CreateCategory categoryDTO, int cateID);
        Task DeleteCategories(int cateID);
    }
}
