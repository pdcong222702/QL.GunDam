using AutoMapper;
using BaseApplication.Queries;
using BusinessLogic.Interfaces.IDbContext;
using BusinessLogic.NguoiDung.DTO;
using Domain.Entities.NguoiDung;
using MediatR;

namespace BusinessLogic.NguoiDung.Queries
{
    public class NguoiDungGetByIdQuery : GetByIdQuery, IRequest<NguoiDungDTO>
    {
    }

    public class NguoiDungGetByIdQueryHandler : GetByIdQueryHandler<IAdminDbContext, nguoi_dung>,
                                                IRequestHandler<NguoiDungGetByIdQuery, NguoiDungDTO>
    {
        public NguoiDungGetByIdQueryHandler(IAdminDbContext context, IMapper mapper, IMediator mediator) : base(context, mapper, mediator)
        {
        }

        public Task<NguoiDungDTO> Handle(NguoiDungGetByIdQuery request, CancellationToken cancellationToken)
        {
            return this.Handle<NguoiDungDTO>(request, cancellationToken);
        }
    }
}
