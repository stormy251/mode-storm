import React, {ReactNode, Ref, useContext} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {ModalContext} from 'zones/app';

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

export interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** The hidden motion variant desired to animate the content of the modal out of view */
  contentHidden?: object;
  /** The visible motion variant desired to animate the content of the modal into view */
  contentVisible?: object;
  /** This controls if a click on the overlay should close the modal or not */
  dismissible?: boolean;
  /** The hidden motion variant desired to animate the content of the modal out of view */
  overlayHidden?: object;
  /** The visible motion variant desired to animate the content of the modal into view */
  overlayVisible?: object;
}

/**
 * This is a configuration that applies a darken'd background and centers the Modal content on the page.
 */
const Modal = (props: Props) => {
  const {
    children,
    contentHidden = {
      opacity: 0,
      y: -30
    },
    contentVisible = {
      opacity: 1,
      y: 0
    },
    dismissible = true,
    overlayHidden = {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    },
    overlayVisible = {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    }} = props;

  const {closeModal} = useContext(ModalContext);

  /** Drives the content animation */
  const contentVariants = {hidden: contentHidden, visible: contentVisible};
  /** Drives the overlay animation */
  const overlayVariants = {hidden: overlayHidden, visible: overlayVisible};

  /** This ref is used to track outside clicks from the current active modal */
  const overlayRef: Ref<HTMLDivElement> = React.createRef();

  /** Logic to ensure the modal is reacting appropriately to overlay clicks */
  const handleOverlayClick = (event): void => {
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

export default Modal;
