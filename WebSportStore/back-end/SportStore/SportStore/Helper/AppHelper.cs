using AutoMapper;
using SportStore.DTO.Category;
using SportStore.DTO.Customer;
using SportStore.DTO.News;
using SportStore.DTO.Product;
using SportStore.DTO.Staff;
using SportStore.DTO.StaffPosition;
using SportStore.Models;

namespace SportStore.Helper
{
    public class AppHelper : Profile
    {
        public AppHelper() {
            CreateMap<Category, ReadCategory>().ReverseMap();           
            CreateMap<Product, ReadProduct>().ReverseMap();
            CreateMap<StaffPosition, ReadPosition>().ReverseMap();
            CreateMap<Staff, ReadStaff>().ReverseMap();
            CreateMap<News, ReadNews>().ReverseMap();
            CreateMap<Customer, ReadCustomer>().ReverseMap();
        }
    }
}
