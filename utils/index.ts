import { JobInfo, SearchFilterI } from '@/types';

export const genericFilter = <K extends keyof JobInfo>(
  state: JobInfo[],
  filters: SearchFilterI
) => {
  return state.filter((job) => {
    return (
      job.location
        .toLocaleLowerCase()
        .includes(filters.location.toLocaleLowerCase()) &&
      job.position
        .toLocaleLowerCase()
        .includes(filters.position.toLocaleLowerCase()) &&
      job.contract
        .toLocaleLowerCase()
        .includes(filters.contract.toLocaleLowerCase())
    );
  });
};
