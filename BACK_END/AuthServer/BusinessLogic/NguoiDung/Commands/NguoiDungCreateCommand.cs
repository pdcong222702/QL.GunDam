using AutoMapper;
using BaseApplication.Commands;
using BaseApplication.Interface;
using BusinessLogic.Interfaces.IDbContext;
using BusinessLogic.NguoiDung.DTO;
using Domain.Entities.NguoiDung;
using MediatR;

namespace BusinessLogic.NguoiDung.Commands
{
    public class NguoiDungCreateCommand : CreateCommand<NguoiDungDTO>, IRequest<NguoiDungDTO>
    {
    }

    public class NguoiDungCreateCommandHandler : CreateCommandHandler<IAdminDbContext, nguoi_dung>,
                                                 IRequestHandler<NguoiDungCreateCommand, NguoiDungDTO>
    {
        public NguoiDungCreateCommandHandler(IAdminDbContext context, IMapper mapper, IMediator mediator) : base(context, mapper, mediator)
        {
        }

        public Task<NguoiDungDTO> Handle(NguoiDungCreateCommand request, CancellationToken cancellationToken)
        {
            try
            {
                return this.Handle(request, cancellationToken);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        protected override nguoi_dung MapToEntity<TDto>(TDto dto)
        {
            var data = (NguoiDungDTO)(object)dto;
            var entity = base.MapToEntity(data);
            return entity;
        }
    }
}
