using SportStore.DTO.StaffPosition;

namespace SportStore.Repository.StaffPositionRepo
{
    public interface IPositionRepository
    {
        Task<List<ReadPosition>> GetAllPosition();
        Task<ReadPosition> GetPositionByID(int id);
        Task<int> AddPosition(CreatePosition positionDTO);
        Task UpdatePosition(CreatePosition positionDTO, int id);
        Task DeletePosition(int id);
    }
}
