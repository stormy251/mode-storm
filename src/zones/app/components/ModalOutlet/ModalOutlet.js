import React, {useContext} from 'react';
import {AnimatePresence} from 'framer-motion';
import {ModalContext} from 'zones/app';

/** Component used to render the stack of modals for the application. */
const ModalOutlet = () => {
  const {modalArray} = useContext(ModalContext);

  return (
    <AnimatePresence>
      {modalArray.map(
        (ModalConfig, index) => <ModalConfig.Component key={'modalOverlay' + index} {...ModalConfig.props}/>
      )}
    </AnimatePresence>
  );
};

export default ModalOutlet;
