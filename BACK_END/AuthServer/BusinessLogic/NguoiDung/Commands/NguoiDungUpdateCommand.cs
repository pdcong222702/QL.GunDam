using AutoMapper;
using BaseApplication.Commands;
using BaseApplication.Interface;
using BusinessLogic.Interfaces.IDbContext;
using BusinessLogic.NguoiDung.DTO;
using Domain.Entities.NguoiDung;
using MediatR;

namespace BusinessLogic.NguoiDung.Commands
{
    public class NguoiDungUpdateCommand : UpdateCommand<NguoiDungDTO>, IRequest<NguoiDungDTO>
    {
    }

    public class NguoiDungUpdateCommandHandler : UpdateCommandHandler<IAdminDbContext, nguoi_dung>,
                                                 IRequestHandler<NguoiDungUpdateCommand, NguoiDungDTO>
    {
        public NguoiDungUpdateCommandHandler(IAdminDbContext context, IMapper mapper, IMediator mediator) : base(context, mapper, mediator)
        {
        }

        public Task<NguoiDungDTO> Handle(NguoiDungUpdateCommand request, CancellationToken cancellationToken)
        {
            return this.Handle<NguoiDungDTO>(request, cancellationToken);
        }
        protected override void MapToEntity<TDto>(TDto dto, nguoi_dung entity)
        {
            var data = (NguoiDungDTO)(object)dto;
            base.MapToEntity(data, entity);
        }
    }
}
