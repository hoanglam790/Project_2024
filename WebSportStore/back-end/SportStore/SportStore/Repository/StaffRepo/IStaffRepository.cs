using SportStore.DTO.Staff;

namespace SportStore.Repository.StaffRepo
{
    public interface IStaffRepository
    {
        Task<List<ReadStaff>> GetAllStaff();
        Task<List<ReadStaff>> GetStaffByID(int staffID);
        Task<int> AddStaff(CreateStaff staffDTO);
        Task UpdateStaff(CreateStaff staffDTO, int staffID);
        Task DeleteStaff(int staffID);
    }
}
