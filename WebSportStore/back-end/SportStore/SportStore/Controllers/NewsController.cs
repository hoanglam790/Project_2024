using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SportStore.DTO.News;
using SportStore.Helper;
using SportStore.Repository.NewsRepo;
using SportStore.Repository.StaffRepo;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsRepository _newsRepository;

        public NewsController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetNews()
        {
            try
            {
                var getNews = await _newsRepository.GetAllNews();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy dữ liệu tin tức thành công",
                    Data = getNews
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = true,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetNewsByID(int id)
        {
            try
            {
                var getNewsByID = await _newsRepository.GetNewsByID(id);
                if(getNewsByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu tin tức thành công",
                        Data = getNewsByID
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = true,
                    Message = "Không tìm thấy tin tức số " + id,
                    Data = getNewsByID
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new ApiRespond
                {
                    Success = true,
                    Message = ex.Message,
                    Data = null
                });
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNews([FromForm]CreateNews newsDTO)
        {
            try
            {
                var addNews = await _newsRepository.AddNews(newsDTO);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm mới tin tức thành công"
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
        [Route("{id}")]
        public async Task<IActionResult> UpdateNews([FromForm] CreateNews newsDTO, int id)
        {
            try
            {
                var updateNews = await _newsRepository.GetNewsByID(id);
                if(updateNews != null)
                {
                    await _newsRepository.UpdateNews(newsDTO, id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật tin tức thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = true,
                    Message = "Cập nhật thất bại. Không tìm thấy tin tức",
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
        [Route("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            try
            {
                var deleteNews = await _newsRepository.GetNewsByID(id);
                if(deleteNews != null)
                {
                    await _newsRepository.DeleteNews(id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Xóa tin tức thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = true,
                    Message = "Xóa thất bại. Không tìm thấy tin tức",
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
