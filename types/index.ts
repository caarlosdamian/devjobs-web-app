import { Dispatch } from 'react';

export interface JobInfo {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export type ActionType = 'location' | 'title' | 'contract';

export interface ChangeAction {
  type: ActionType;
  payload: string;
}

export interface SearchContextProps {
  state: JobInfo[];
  dispatch: Dispatch<ChangeAction>;
}

export interface InputObject {
  id: string;
  alt: string;
  icon: string;
  placeholder: string;
  className: string;
  height: number;
  width: number;
  type: ActionType;
}
