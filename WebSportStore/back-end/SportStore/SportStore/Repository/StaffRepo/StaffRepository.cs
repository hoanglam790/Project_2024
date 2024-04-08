using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.DTO.Product;
using SportStore.DTO.Staff;
using SportStore.Models;

namespace SportStore.Repository.StaffRepo
{
    public class StaffRepository : IStaffRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public StaffRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<List<ReadStaff>> GetAllStaff()
        {
            using (var context = _dataContext)
            {
                return _mapper.Map<List<ReadStaff>>
                    (from st in context.Staffs                                                     
                     select new ReadStaff()                                                     
                     {                                                         
                         StaffID = st.StaffID,                                                         
                         Name = st.Name,                                                         
                         Phone = st.Phone,                                                         
                         Email = st.Email,                                                         
                         PositionName = st.StaffPosition != null ? st.StaffPosition.PositionName : null                                                     
                     }).ToList();
            }
        }

        public async Task<List<ReadStaff>> GetStaffByID(int staffID)
        {
            using (var context = _dataContext)
            {
                return _mapper.Map<List<ReadStaff>>
                    (from st in context.Staffs.Where(s => s.StaffID == staffID)                                                    
                     select new ReadStaff()                                                   
                     {                                                       
                         StaffID = st.StaffID,                                                       
                         Name = st.Name,                                                       
                         Phone = st.Phone,                                                        
                         Email = st.Email,                                                        
                         PositionName = st.StaffPosition != null ? st.StaffPosition.PositionName : null                                                    
                     }).ToList();
            }
        }

        public async Task<int> AddStaff(CreateStaff staffDTO)
        {
            var addStaff = new Staff();
            addStaff.Name = staffDTO.Name;
            addStaff.Phone = staffDTO.Phone;
            addStaff.Email = staffDTO.Email;
            addStaff.StaffPositionID = staffDTO.PositionID;
            addStaff.CreateDate = DateTime.Now;
            _dataContext.Staffs.Add(addStaff);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task UpdateStaff(CreateStaff staffDTO, int staffID)
        {
            var updateStaff = await _dataContext.Staffs.FindAsync(staffID);
            if (updateStaff != null)
            {
                updateStaff.Name = staffDTO.Name;
                updateStaff.Phone = staffDTO.Phone;
                updateStaff.Email = staffDTO.Email;
                updateStaff.StaffPositionID = staffDTO.PositionID;
                updateStaff.UpdateDate = DateTime.Now;
                _dataContext.Staffs.Update(updateStaff);
                await _dataContext.SaveChangesAsync();
            }
        }

        public async Task DeleteStaff(int staffID)
        {
            var deleteStaff = await _dataContext.Staffs.FindAsync(staffID);
            if(deleteStaff != null)
            {
                _dataContext.Staffs.Remove(deleteStaff);
                await _dataContext.SaveChangesAsync();
            }
        }
    }
}
