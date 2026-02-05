using AutoMapper;
using BaseApplication.DTO;
using BaseApplication.Queries;
using BusinessLogic.Interfaces.IDbContext;
using BusinessLogic.NguoiDung.DTO;
using Domain.Entities.NguoiDung;
using MediatR;

namespace BusinessLogic.NguoiDung.Queries
{
    public class NguoiDungGetAllQuery : GetAllQuery, IRequest<ResponeListDto<NguoiDungDTO>>
    {
    }

    public class NguoiDungGetAllQueryHandler : GetAllQueryHandler<IAdminDbContext, nguoi_dung>,
                                               IRequestHandler<NguoiDungGetAllQuery, ResponeListDto<NguoiDungDTO>>
    {
        public NguoiDungGetAllQueryHandler(IAdminDbContext context, IMapper mapper, IMediator mediator) : base(context, mapper, mediator)
        {
        }

        //public Task<ResponeListDto<NguoiDungDTO>> Handle(NguoiDungGetAllQuery request, CancellationToken cancellationToken)
        //{
        //    return this.Handle<NguoiDungDTO>(request, cancellationToken);
        //}

        public async Task<ResponeListDto<NguoiDungDTO>> Handle(NguoiDungGetAllQuery request, CancellationToken cancellationToken)
        {
            // Dùng await để đảm bảo nó khớp với signature của MediatR 12
            return await base.Handle<NguoiDungDTO>(request, cancellationToken);
        }
    }
}
