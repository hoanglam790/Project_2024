using SportStore.DTO.Product;

namespace SportStore.Repository.ProductRepo
{
    public interface IProductRepository
    {
        Task<List<ReadProduct>> GetAllProduct();
        Task<List<ReadProduct>> GetProductByID(int productID);
        Task<int> AddProduct(CreateProduct productDTO);
        Task<int> UpdateProduct(CreateProduct productDTO, int productID);
        Task DeleteProduct(int productID);
    }
}
