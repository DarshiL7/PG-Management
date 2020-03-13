using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PGManagement.UnitOfWork.Main;
using PGManagement.Models.Main;

namespace PGManagement.Domain.MasterModule
{
    public class noticeDomain : InoticeDomain
    {
        public noticeDomain(IMasterUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(vNotice parameters)
        {
            DateTimeOffset dateTimeOffset = DateTimeOffset.Now;
            vNotice notice = await this.Uow.Repository<vNotice>().SingleOrDefaultAsync(t => t.NoticeId==19);
            string date = notice.CreatedDate.Value.Date.ToString();
            return await this.Uow.Repository<vNotice>().FindByAsync(t => t.CreatedDate.Value.Date.ToString().Equals(dateTimeOffset.Date.ToString()));
        }

        public Task<object> GetBy(vNotice parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Notice entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Notice entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Notice entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Notice entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vNotice parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vNotice parameters)
        {
            throw new NotImplementedException();
        }

        public IMasterUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface InoticeDomain : ICoreDomain<Notice,vNotice> { }
}
