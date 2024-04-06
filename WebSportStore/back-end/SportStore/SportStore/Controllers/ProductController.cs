using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.DTO.Category;
using SportStore.DTO.Product;
using SportStore.Helper;
using SportStore.Repository.ProductRepo;

namespace SportStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                var product = await _productRepository.GetAllProduct();
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Lấy dữ liệu sản phẩm thành công",
                    Data = product
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
        public async Task<IActionResult> GetProductByID(int id)
        {
            try
            {
                var productByID = await _productRepository.GetProductByID(id);
                if (productByID != null)
                {
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Lấy dữ liệu sản phẩm thành công",
                        Data = productByID
                    });
                }
                return BadRequest(new ApiRespond
                {
                    Success = false,
                    Message = "Không tìm thấy sản phẩm số " + id,
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
        public async Task<IActionResult> AddProduct([FromForm] CreateProduct productDTO)
        {
            try
            {
                var addProduct = await _productRepository.AddProduct(productDTO);
                return Ok(new ApiRespond
                {
                    Success = true,
                    Message = "Thêm mới sản phẩm thành công"
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
        public async Task<IActionResult> UpdateProduct([FromForm] CreateProduct productDTO, int id)
        {
            try
            {
                var updateProduct = await _productRepository.GetProductByID(id);
                if (updateProduct != null)
                {
                    await _productRepository.UpdateProduct(productDTO, id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Cập nhật sản phẩm thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Cập nhật thất bại. Không tìm thấy sản phẩm",
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
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                var deleteProduct = await _productRepository.GetProductByID(id);
                if (deleteProduct != null)
                {
                    await _productRepository.DeleteProduct(id);
                    return Ok(new ApiRespond
                    {
                        Success = true,
                        Message = "Đã xóa sản phẩm thành công"
                    });
                }
                return NotFound(new ApiRespond
                {
                    Success = false,
                    Message = "Xóa thất bại. Không tìm thấy sản phẩm",
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
