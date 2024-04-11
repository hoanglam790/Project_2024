using AutoMapper;
using SportStore.Data;
using SportStore.DTO.News;
using SportStore.Models;

namespace SportStore.Repository.NewsRepo
{
    public class NewsRepository : INewsRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public NewsRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<List<ReadNews>> GetAllNews()
        {
            using (var context = _dataContext)
            {
                return _mapper.Map<List<ReadNews>>(
                    from n in context.News
                    select new ReadNews()
                    {
                        NewsID = n.NewsID,
                        NewsName = n.NewsName,
                        NewsDescription = n.NewsDescription,
                        StaffName = n.Staff != null ? n.Staff.Name : null
                    }).ToList();
            }
        }

        public async Task<List<ReadNews>> GetNewsByID(int newsID)
        {
            using (var context = _dataContext)
            {
                return _mapper.Map<List<ReadNews>>(
                    from n in context.News.Where(a => a.NewsID == newsID)
                    select new ReadNews()
                    {
                        NewsID = n.NewsID,
                        NewsName = n.NewsName,
                        NewsDescription = n.NewsDescription,
                        StaffName = n.Staff != null ? n.Staff.Name : null
                    }).ToList();
            }
        }

        public async Task<int> AddNews(CreateNews newsDTO)
        {
            var addNews = new News();
            addNews.NewsName = newsDTO.NewsName;
            addNews.NewsDescription = newsDTO.NewsDescription;
            addNews.StaffID = newsDTO.StaffID;
            addNews.CreateDate = DateTime.Now;
            _dataContext.News.Add(addNews);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task UpdateNews(CreateNews newsDTO, int newsID)
        {
            var updateNews = await _dataContext.News.FindAsync(newsID);
            if (updateNews != null)
            {
                updateNews.NewsName = newsDTO.NewsName;
                updateNews.NewsDescription = newsDTO.NewsDescription;
                updateNews.StaffID = newsDTO.StaffID;
                updateNews.UpdateDate = DateTime.Now;
                _dataContext.News.Update(updateNews);
                await _dataContext.SaveChangesAsync();
            }
        }
        public async Task DeleteNews(int newsID)
        {
            var deleteNews = await _dataContext.News.FindAsync(newsID);
            if(deleteNews != null)
            {
                _dataContext.News.Remove(deleteNews);
                await _dataContext.SaveChangesAsync();
            }
        }
    }
}
