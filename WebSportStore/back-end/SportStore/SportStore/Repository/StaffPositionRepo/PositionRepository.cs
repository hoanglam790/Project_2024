using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SportStore.Data;
using SportStore.DTO.StaffPosition;
using SportStore.Models;

namespace SportStore.Repository.StaffPositionRepo
{
    public class PositionRepository : IPositionRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        
        public PositionRepository(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        public async Task<List<ReadPosition>> GetAllPosition()
        {
            var getAllPosition = await _dataContext.StaffPositions.ToListAsync();
            return _mapper.Map<List<ReadPosition>>(getAllPosition);
        }

        public async Task<ReadPosition> GetPositionByID(int id)
        {
            var getPositionByID = await _dataContext.StaffPositions.FindAsync(id);
            return _mapper.Map<ReadPosition>(getPositionByID);
        }

        public async Task<int> AddPosition(CreatePosition positionDTO)
        {
            var addPosition = new StaffPosition();
            addPosition.PositionName = positionDTO.PositionName;
            addPosition.CreateDate = DateTime.Now;
            _dataContext.StaffPositions.Add(addPosition);
            await _dataContext.SaveChangesAsync();
            return 1;
        }

        public async Task UpdatePosition(CreatePosition positionDTO, int id)
        {
            var updatePosition = await _dataContext.StaffPositions.FirstOrDefaultAsync(p => p.PositionID == id);
            if (updatePosition != null)
            {
                updatePosition.PositionName = positionDTO.PositionName;
                updatePosition.UpdateDate = DateTime.Now;
                _dataContext.Update(updatePosition);
                await _dataContext.SaveChangesAsync();
            }
        }
        public async Task DeletePosition(int id)
        {
            var deletePosition = await _dataContext.StaffPositions.FirstOrDefaultAsync(p => p.PositionID == id);
            if(deletePosition != null)
            {
                _dataContext.Remove(deletePosition);
                await _dataContext.SaveChangesAsync();
            }
        }
    }
}
