import React, {createContext, ReactNode, useState} from 'react';

export interface Modal {
  /** Must be a single React node, it cannot contain a React fragment */
  Component: ReactNode;
  /** any configuration of props desired */
  props: object;
}

export interface ModalContext {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** Stack like data structure used to provide a stacking modal construction */
  modalArray: Array<Modal>;
  /** Method used to push a new Modal onto the stack */
  openModal: (ModalContent: ModalContext) => void;
  /** Method used to pop a Modal off of the stack */
  closeModal: () => void;
}

export const ModalContext = createContext({
  modalArray: [],
  openModal: (ModalContent: ModalContext) => {},
  closeModal: () => {}
});

export const ModalContextProvider = (props: ModalContext) => {
  const {children} = props;

  const [state, setState]: [ModalContext, React.Dispatch<React.SetStateAction<{ modalArray: any[]; openModal(ModalContent): void; closeModal(): void }>>] = useState({
    openModal (ModalContent: ModalContext): void {
      setState((state) => {
        return {...state, modalArray: [...state.modalArray, ModalContent]};
      });
    },
    closeModal (): void {
      setState((state) => {
        state.modalArray.pop();
        return {...state, modalArray: [...state.modalArray]};
      });
    },
    modalArray: []
  });

  return (
    <ModalContext.Provider value={state}>
      {children}
    </ModalContext.Provider>
  );
};
