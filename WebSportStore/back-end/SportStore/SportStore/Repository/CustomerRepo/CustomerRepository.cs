using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.DTO.Customer;
using SportStore.Models;

namespace SportStore.Repository.CustomerRepo
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public CustomerRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<List<ReadCustomer>> GetAllCustomer()
        {
            var getCustomer = await _dataContext.Customers.ToListAsync();
            return _mapper.Map<List<ReadCustomer>>(getCustomer);
        }

        public async Task<ReadCustomer> GetCustomerByID(int customerID)
        {
            var getCustomerByID = await _dataContext.Customers.FindAsync(customerID);
            return _mapper.Map<ReadCustomer>(getCustomerByID);
        }

        public async Task<int> AddCustomer(CreateCustomer customerDTO)
        {
            var addCustomer = new Customer();
            var addAccount = new Account();
            addCustomer.CustomerName = customerDTO.CustomerName;
            addCustomer.CustomerEmail = customerDTO.CustomerEmail;
            addCustomer.CustomerPhone = customerDTO.CustomerPhone;
            addCustomer.CustomerAddress = customerDTO.CustomerAddress;
            addCustomer.CreateDate = DateTime.Now;
            _dataContext.Customers.Add(addCustomer);
            await _dataContext.SaveChangesAsync();
           
            addAccount.AccountName = customerDTO.AccountName;
            addAccount.Password = customerDTO.Password;
            addAccount.ConfirmPassword = customerDTO.ConfirmPassword;
            addAccount.CustomerID = addCustomer.CustomerID;
            addAccount.CreateDate = DateTime.Now;
            _dataContext.Accounts.Add(addAccount);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task UpdateCustomer(CreateCustomer customerDTO, int customerID)
        {
            var updateCustomer = await _dataContext.Customers.FindAsync(customerID);
            if (updateCustomer != null)
            {
                updateCustomer.CustomerName = customerDTO.CustomerName;
                updateCustomer.CustomerEmail = customerDTO.CustomerEmail;
                updateCustomer.CustomerPhone = customerDTO.CustomerPhone;
                updateCustomer.CustomerAddress = customerDTO.CustomerAddress;
                updateCustomer.UpdateDate = DateTime.Now;
                _dataContext.Customers.Update(updateCustomer);
                await _dataContext.SaveChangesAsync();
            }
        }

        public async Task DeleteCustomer(int customerID)
        {
            var deleteCustomer = await _dataContext.Customers.FindAsync(customerID);
            var getAccount = await _dataContext.Accounts.FindAsync(customerID);
            if (deleteCustomer != null)
            {
                _dataContext.Customers.Remove(deleteCustomer);
                await _dataContext.SaveChangesAsync();                
            }
            if(getAccount != null)
            {
                _dataContext.Accounts.Remove(getAccount);
                await _dataContext.SaveChangesAsync();
            }
        }

        //public int Insert(Customer customer)
        //{
        //    _dataContext.Customers.Add(customer);
        //    _dataContext.SaveChanges();
        //    return customer.CustomerID;
        //}
    }
}
