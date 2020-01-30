import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

// This is the interface to the ModalContext
export const ModalContext = createContext({
  modalArray: [],
  openModal: () => {},
  closeModal: () => {}
});

export const ModalContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    openModal (ModalContent) {
      setState((state) => {
        return {...state, modalArray: [...state.modalArray, ModalContent]};
      });
    },
    closeModal () {
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

ModalContextProvider.defaultProps = {
  children: null
};

ModalContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
