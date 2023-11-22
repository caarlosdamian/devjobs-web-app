import React, { LazyExoticComponent } from 'react';

export enum Modals {
  FilterModal,
}

export const modalsConfig: Record<Modals, LazyExoticComponent<any>> = {
  [Modals.FilterModal]: React.lazy(() => import('./FilterModal')),
};
