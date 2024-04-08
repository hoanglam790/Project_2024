using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.DTO.Staff;
using SportStore.Helper;
using SportStore.Repository.StaffRepo;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly IStaffRepository _staffRepository;
        public StaffController(IStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStaff()
        {
            try
            {
                var getAllStaff = await _staffRepository.GetAllStaff();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy dữ liệu nhân viên thành công",
                    Data = getAllStaff
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

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetStaffByID(int id)
        {
            try
            {
                var getStaffByID = await _staffRepository.GetStaffByID(id);
                if (getStaffByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu nhân viên thành công",
                        Data = getStaffByID
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Không tìm thấy nhân viên số " + id,
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

        [HttpPost]
        public async Task<IActionResult> AddNewStaff([FromForm] CreateStaff staffDTO)
        {
            try
            {
                var addStaff = await _staffRepository.AddStaff(staffDTO);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm mới nhân viên thành công"
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
        public async Task<IActionResult> UpdateStaff([FromForm] CreateStaff staffDTO, int id)
        {
            try
            {
                var updateStaff = await _staffRepository.GetStaffByID(id);
                if (updateStaff != null)
                {
                    await _staffRepository.UpdateStaff(staffDTO, id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật nhân viên thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Cập nhật thất bại. Không tìm thấy nhân viên",
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
        public async Task<IActionResult> DeleteStaff(int id)
        {
            try
            {
                var deleteStaff = await _staffRepository.GetStaffByID(id);
                if (deleteStaff != null)
                {
                    await _staffRepository.DeleteStaff(id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Xóa nhân viên thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Xóa thất bại. Không tìm thấy nhân viên",
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
