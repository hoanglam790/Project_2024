using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.DTO.Customer;
using SportStore.DTO.Staff;
using SportStore.Helper;
using SportStore.Repository.CustomerRepo;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCustomer()
        {
            try
            {
                var getAllCustomer = await _customerRepository.GetAllCustomer();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy dữ liệu khách hàng thành công",
                    Data = getAllCustomer
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
        public async Task<IActionResult> GetCustomerByID(int id)
        {
            try
            {
                var getCustomerByID = await _customerRepository.GetCustomerByID(id);
                if (getCustomerByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu khách hàng thành công",
                        Data = getCustomerByID
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = true,
                    Message = "Không tìm thấy khách hàng số " + id,
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
        public async Task<IActionResult> AddNewCustomer([FromForm] CreateCustomer customerDTO)
        {
            try
            {
                var addCustomer = await _customerRepository.AddCustomer(customerDTO);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm mới khách hàng thành công"
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
        public async Task<IActionResult> UpdateCustomer([FromForm] CreateCustomer customerDTO, int id)
        {
            try
            {
                var updateCustomer = await _customerRepository.GetCustomerByID(id);
                if (updateCustomer != null)
                {
                    await _customerRepository.UpdateCustomer(customerDTO, id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật khách hàng thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Cập nhật thất bại. Không tìm thấy khách hàng",
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
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            try
            {
                var deleteCustomer = await _customerRepository.GetCustomerByID(id);
                if (deleteCustomer != null)
                {
                    await _customerRepository.DeleteCustomer(id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Xóa khách hàng thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Xóa thất bại. Không tìm thấy khách hàng",
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
