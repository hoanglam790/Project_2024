using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.Data;
using SportStore.DTO.Category;
using SportStore.Helper;
using SportStore.Repository.CategoryRepo;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(DataContext dataContext, ICategoryRepository categoryRepository)
        {
            _dataContext = dataContext;
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCate()
        {
            try
            {
                var categories = await _categoryRepository.GetAllCategories();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy dữ liệu danh mục sản phẩm thành công",
                    Data = categories
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond{
                    Success = false,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpGet]
        [Route("{cateID}")]
        public async Task<IActionResult> GetCateByID(int cateID)
        {
            try
            {
                var cateByID = await _categoryRepository.GetCategoriesByID(cateID);
                if(cateByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu danh mục sản phẩm thành công",
                        Data = cateByID
                    });
                }
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = "Không tìm thấy danh mục sản phẩm số " + cateID,
                    Data = null
                });
            }
            catch (System.Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddCate([FromForm] CreateCategory cateDTO)
        {
            try
            {
                var addCate = await _categoryRepository.AddCategories(cateDTO);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm mới danh mục sản phẩm thành công"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCate([FromForm] CreateCategory cateDTO, int cateID)
        {
            try
            {
                var updateCate = await _categoryRepository.GetCategoriesByID(cateID);
                if(updateCate != null)
                {
                    await _categoryRepository.UpdateCategories(cateDTO, cateID);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật danh mục sản phẩm thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Cập nhật thất bại. Không tìm thấy danh mục sản phẩm",
                    Data = null
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpDelete]
        [Route("{cateID}")]
        public async Task<IActionResult> DeleteCate(int cateID)
        {
            try
            {
                var deleteCate = await _categoryRepository.GetCategoriesByID(cateID);
                if (deleteCate != null)
                {
                    await _categoryRepository.DeleteCategories(cateID);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Xóa danh mục sản phẩm thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Xóa thất bại. Không tìm thấy danh mục sản phẩm",
                    Data = null
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = ex.Message,
                    Data = null
                });
            }           
        }
    }
}
