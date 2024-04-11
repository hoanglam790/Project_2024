using SportStore.DTO.Customer;

namespace SportStore.Repository.CustomerRepo
{
    public interface ICustomerRepository
    {
        Task<List<ReadCustomer>> GetAllCustomer();
        Task<ReadCustomer> GetCustomerByID(int customerID);
        Task<int> AddCustomer(CreateCustomer customerDTO);
        Task UpdateCustomer(CreateCustomer customerDTO, int customerID);
        Task DeleteCustomer(int customerID);
    }
}
