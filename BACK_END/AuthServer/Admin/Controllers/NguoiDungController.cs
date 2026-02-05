using BaseApi.Base;
using BaseApplication.Exceptions;
using BusinessLogic.NguoiDung.Commands;
using BusinessLogic.NguoiDung.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Admin.Controllers
{
    [Route("api/nguoi-dung")]
    [ApiController]
    public class NguoiDungController : BaseCrudApiController<
        NguoiDungGetAllQuery,
        NguoiDungGetByIdQuery,
        NguoiDungCreateCommand,
        NguoiDungUpdateCommand,
        NguoiDungDeleteCommand
        >
    {
    }
}
