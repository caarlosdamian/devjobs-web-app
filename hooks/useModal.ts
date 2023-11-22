import { currentModal } from '../components/modal/currentModal';
import { Modals } from '../components/modal/modals-config';

export const useModal = <P>(name: Modals) => {
  return {
    open: (props: P) => {
      currentModal.set({ name, props: props });
    },
    close: () => {
      currentModal.set(null);
    },
  };
};
