using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.Repository.StaffPositionRepo;
using SportStore.Helper;
using SportStore.DTO.StaffPosition;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private readonly IPositionRepository _positionRepository;

        public PositionController(IPositionRepository positionRepository)
        {
            _positionRepository = positionRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPosition()
        {
            try
            {
                var position = await _positionRepository.GetAllPosition();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy danh sách vị trí của nhân viên thành công",
                    Data = position
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
        public async Task<IActionResult> GetPositionByID(int id)
        {
            try
            {
                var getPositionByID = await _positionRepository.GetPositionByID(id);
                if(getPositionByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu vị trí của nhân viên thành công",
                        Data = getPositionByID
                    });
                }
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = "Không tìm thấy vị trí của nhân viên",
                    Data = null
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
        public async Task<IActionResult> AddPosition([FromForm] CreatePosition position)
        {
            try
            {
                var addPosition = await _positionRepository.AddPosition(position);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm vị trí mới thành công"
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

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdatePosition([FromForm] CreatePosition position, int id)
        {
            try
            {
                var updatePosition = await _positionRepository.GetPositionByID(id);
                if (updatePosition != null)
                {
                    await _positionRepository.UpdatePosition(position, id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật vị trí nhân viên thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Cập nhật thất bại. Không tìm thấy vị trí của nhân viên",
                    Data = null
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

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeletePosition(int id)
        {
            try
            {
                var deletePosition = await _positionRepository.GetPositionByID(id);
                if (deletePosition != null)
                {
                    await _positionRepository.DeletePosition(id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Xóa vị trí nhân viên thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Xóa thất bại. Không tìm thấy vị trí của nhân viên",
                    Data = null
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
    }
}
