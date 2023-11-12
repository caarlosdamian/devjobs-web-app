import { JobInfo } from '@/types';

export const genericFilter = <K extends keyof JobInfo>(
  state: JobInfo[],
  payload: string,
  filterKey: K
) => {
  return state.filter((job) => {
    const value = job[filterKey];

    if (typeof value === 'string') {
      return value.toLocaleLowerCase().includes(payload.toLocaleLowerCase());
    }

    return false;
  });
};