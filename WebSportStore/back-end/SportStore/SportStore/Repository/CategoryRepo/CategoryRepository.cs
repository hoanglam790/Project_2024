using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.DTO.Category;
using SportStore.Models;

namespace SportStore.Repository.CategoryRepo
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _dataContext;

        private readonly IMapper _mapper;
        public CategoryRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<List<ReadCategory>> GetAllCategories()
        {
            var getAllCate = await _dataContext.Categories.ToListAsync();
            return _mapper.Map<List<ReadCategory>>(getAllCate);
        }

        public async Task<ReadCategory> GetCategoriesByID(int cateID)
        {
            var getCateByID = await _dataContext.Categories.FindAsync(cateID);
            return _mapper.Map<ReadCategory>(getCateByID);
        }

        public async Task<int> AddCategories(CreateCategory categoryDTO)
        {
            var addCate = new Category();
            addCate.CategoryName = categoryDTO.CategoryName;
            addCate.CreateDate = DateTime.Now;
            _dataContext.Categories.Add(addCate);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task UpdateCategories(CreateCategory categoryDTO, int cateID)
        {
            var updateCate = await _dataContext.Categories.FirstOrDefaultAsync(n => n.CategoryID == cateID);
            if (updateCate != null)
            {
                updateCate.CategoryName = categoryDTO.CategoryName;
                updateCate.UpdateDate = DateTime.Now;
                _dataContext.Update(updateCate);
                await _dataContext.SaveChangesAsync();
            }
        }

        public async Task DeleteCategories(int cateID)
        {
            var deleteCate = await _dataContext.Categories.FirstOrDefaultAsync(n => n.CategoryID == cateID);
            if (deleteCate != null)
            {
                _dataContext.Remove(deleteCate);
                await _dataContext.SaveChangesAsync();
            }
        }       
    }
}
