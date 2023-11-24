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

export type ActionType = 'location' | 'position' | 'contract' | 'search';

export interface ChangeAction {
  type: ActionType;
  payload?: string | null;
}

export interface SearchFilterI {
  location: string;
  position: string;
  contract: string;
}

export interface StateI {
  data: JobInfo[];
  search: SearchFilterI;
}

export interface SearchContextProps {
  state: StateI;
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

export interface FilterModalProps {
  onSave: () => void;
  onCancel: () => void;
}
