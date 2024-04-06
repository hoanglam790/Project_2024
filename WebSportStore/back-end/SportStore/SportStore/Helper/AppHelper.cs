using AutoMapper;
using SportStore.DTO.Category;
using SportStore.DTO.Product;
using SportStore.DTO.StaffPosition;
using SportStore.Models;

namespace SportStore.Helper
{
    public class AppHelper : Profile
    {
        public AppHelper() {
            CreateMap<Category, ReadCategory>().ReverseMap();
            CreateMap<StaffPosition, ReadPosition>().ReverseMap();
            CreateMap<Product, ReadProduct>().ReverseMap();
        }
    }
}
