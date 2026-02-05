using AutoMapper;
using BaseApplication.Commands;
using BusinessLogic.Interfaces.IDbContext;
using Domain.Entities.NguoiDung;
using MediatR;

namespace BusinessLogic.NguoiDung.Commands
{
    public record NguoiDungDeleteCommand : DeleteCommand, IRequest<int>
    {
    }

    public class NguoiDungDeleteCommandHandler : DeleteCommandHandler<IAdminDbContext, nguoi_dung>,
                                                 IRequestHandler<NguoiDungDeleteCommand, int>
    {
        public NguoiDungDeleteCommandHandler(IAdminDbContext context, IMapper mapper, IMediator mediator) : base(context, mapper, mediator)
        {
        }

        public Task<int> Handle(NguoiDungDeleteCommand request, CancellationToken cancellationToken)
        {
            return this.Handle(request, cancellationToken);
        }
    }
}
