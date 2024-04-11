using SportStore.DTO.News;

namespace SportStore.Repository.NewsRepo
{
    public interface INewsRepository
    {
        Task<List<ReadNews>> GetAllNews();
        Task<List<ReadNews>> GetNewsByID(int newsID);
        Task<int> AddNews(CreateNews newsDTO);
        Task UpdateNews(CreateNews newsDTO, int newsID);
        Task DeleteNews(int newsID);
    }
}
