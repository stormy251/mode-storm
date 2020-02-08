import React, {createContext, ReactNode, useState} from 'react';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
}

export interface Modal {
  /** Must be a single React node, it cannot contain a React fragment */
  Component: ReactNode;
  /** any configuration of props desired */
  props: object;
}

export const ModalContext = createContext({
  modalArray: [],
  openModal: (ModalContent: Modal) => {},
  closeModal: () => {}
});

export const ModalContextProvider = (props: Props) => {
  const {children} = props;

  const [state, setState] = useState({
    openModal (ModalContent: Modal): void {
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
