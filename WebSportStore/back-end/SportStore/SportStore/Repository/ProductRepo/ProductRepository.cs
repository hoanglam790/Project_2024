using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.DTO.Product;
using SportStore.Models;

namespace SportStore.Repository.ProductRepo
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _dataContext;

        private readonly IMapper _mapper;
        
        public ProductRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<List<ReadProduct>> GetAllProduct()
        {
            using (var getAllProduct = _dataContext)
            {
                return _mapper.Map<List<ReadProduct>>(from p in getAllProduct.Products
                select new ReadProduct()
                {
                   ProductID = p.ProductID,
                   ProductName = p.ProductName,
                   ProductPrice = p.ProductPrice,
                   Discount = p.Discount,
                   ProductDescription = p.ProductDescription,
                   ProductImage = p.ProductImage,
                   QuantityInStock = p.QuantityInStock,
                   CategoryName = p.Category != null ? p.Category.CategoryName : null
                }).ToList();
            }
            //var getAllProduct = await _dataContext.Products.ToListAsync();
            //return _mapper.Map<List<ReadProduct>>(getAllProduct);
        }

        public async Task<List<ReadProduct>> GetProductByID(int productID)
        {
            using (var getProductByID = _dataContext)
            {
                return _mapper.Map<List<ReadProduct>>
                    (from pd in getProductByID.Products.Where(p => p.ProductID == productID)                                                     
                     select new ReadProduct()                                                      
                     {                                                          
                         ProductID = pd.ProductID,                                                          
                         ProductName = pd.ProductName,                                                          
                         ProductPrice = pd.ProductPrice,                                                          
                         Discount = pd.Discount,                                                         
                         ProductDescription = pd.ProductDescription,                                                         
                         ProductImage = pd.ProductImage,                                                          
                         QuantityInStock = pd.QuantityInStock,                                                          
                         CategoryName = pd.Category != null ? pd.Category.CategoryName : null                                                    
                     }).ToList();
            }
            //var getProductByID = await _dataContext.Products.FindAsync(productID);
            //return _mapper.Map<ReadProduct>(getProductByID);
        }

        public async Task<int> AddProduct(CreateProduct productDTO)
        {
            if (productDTO.ProductImage == null || productDTO.ProductImage.Length == 0)
            {
                return 0;
                //var pathProduct = Path.Combine(Directory.GetCurrentDirectory().Replace("\\", "/"), "Upload", "Images", productDTO.ProductImage.FileName);
                //if (!Directory.Exists(pathProduct))
                //{
                //    Directory.CreateDirectory(pathProduct);
                //}
                //using (var st = System.IO.File.Create(pathProduct))
                //{
                //    await productDTO.ProductImage.CopyToAsync(st);
                //    st.Flush();
                //}
                //addProduct.ProductImage = productDTO.ProductImage.FileName;
            }
            string imageURL = await Save(productDTO.ProductImage);

            var addProduct = new Product();
            addProduct.ProductName = productDTO.ProductName;
            addProduct.ProductPrice = productDTO.ProductPrice;
            addProduct.Discount = productDTO.Discount;
            addProduct.ProductDescription = productDTO.ProductDescription;
            addProduct.ProductImage = imageURL;
            addProduct.QuantityInStock = productDTO.QuantityInStock;
            addProduct.CategoryID = productDTO.CategoryID;
            addProduct.CreateDate = DateTime.Now;            
            _dataContext.Products.Add(addProduct);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task<int> UpdateProduct(CreateProduct productDTO, int productID)
        {
            var updateProduct = await _dataContext.Products.FirstOrDefaultAsync(p => p.ProductID == productID);
            if (updateProduct != null)
            {
                if(productDTO.ProductImage != null && productDTO.ProductImage.Length > 0)
                {
                    string uploadImage = await Save(productDTO.ProductImage);
                    updateProduct.ProductImage = uploadImage;
                }
                updateProduct.ProductName = productDTO.ProductName;
                updateProduct.ProductPrice = productDTO.ProductPrice;
                updateProduct.Discount = productDTO.Discount;
                updateProduct.ProductDescription = productDTO.ProductDescription;
                updateProduct.QuantityInStock = productDTO.QuantityInStock;
                updateProduct.CategoryID = productDTO.CategoryID;
                updateProduct.UpdateDate = DateTime.Now;
                _dataContext.Products.Update(updateProduct);
                await _dataContext.SaveChangesAsync();
                return 1;
            }
            else
            { 
                return 0; 
            }
        }

        public async Task DeleteProduct(int productID)
        {
            var deleteProduct = await _dataContext.Products.FirstOrDefaultAsync(p => p.ProductID == productID);
            if (deleteProduct != null)
            {
                _dataContext.Remove(deleteProduct);
                await _dataContext.SaveChangesAsync();
            }
        }

        private async Task<string> Save(IFormFile productImage)
        {
            string fileName = $"{DateTime.Now:yyyyMMddHHmmss}_{productImage.FileName}";
            string path = Path.Combine("Upload", "Images", fileName);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                await productImage.CopyToAsync(fileStream);
            }
            return Path.Combine("/Images", fileName).Replace("\\", "/");
        }
    }
}
