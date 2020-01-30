import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ModalContext} from 'lib/contexts/ModalContext';

const ModalOverlay = styled(motion.div)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

/**
 * This is a configuration that applies a darken'd background and centers the Modal content on the page.
 */
const Modal = (props) => {
  const {children, contentHidden, contentVisible, dismissible, overlayHidden, overlayVisible} = props;

  const contentVariants = {hidden: contentHidden, visible: contentVisible};
  const overlayVariants = {hidden: overlayHidden, visible: overlayVisible};
  const {closeModal} = useContext(ModalContext);

  const overlayRef = React.createRef();

  const handleOverlayClick = (event) => {
    if (overlayRef.current === event.target && dismissible) {
      closeModal();
    }
  };

  return (
    <ModalOverlay
      ref={overlayRef}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariants}
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </ModalOverlay>
  );
};

Modal.defaultProps = {
  children: null,
  contentHidden: {
    opacity: 0,
    y: -30
  },
  contentVisible: {
    opacity: 1,
    y: 0
  },
  dismissible: true,
  overlayHidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  overlayVisible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
};

Modal.propTypes = {
  /** Must be a single React node, it cannot contain a React fragment */
  children: PropTypes.node,
  /** The hidden motion variant desired to animate the content of the modal out of view */
  contentHidden: PropTypes.object,
  /** The visible motion variant desired to animate the content of the modal into view */
  contentVisible: PropTypes.object,
  /** This controls if a click on the overlay should close the modal or not */
  dismissible: PropTypes.bool,
  /** The hidden motion variant desired to animate the content of the modal out of view */
  overlayHidden: PropTypes.object,
  /** The visible motion variant desired to animate the content of the modal into view */
  overlayVisible: PropTypes.object
};

export default Modal;
