import styled from 'styled-components';
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Modal from 'zones/app/components/Modal';
import {colors} from 'lib/theme';
import {UserContext} from 'zones/app';

const ModalContainer = styled.div`
	background-color: ${colors.white};
	border-radius: 8px;
	padding: 8px;
`;

const AuthModal = ({closeModal}) => {
  const {name, signedIn, signOut, signIn} = useContext(UserContext);
  return (
    <Modal>
      <ModalContainer>
        {signedIn ?
          <>
            <h1>Hi {name} Nice to see you!</h1>
            <button onClick={signOut}>Sign out</button>
          </>
          :
          <>
            <h1>Hi {name} Click the button to sign in.</h1>
            <button onClick={() => signIn('admin')}>Sign in as admin</button>
            <button onClick={() => signIn('basic')}>Sign in as basic</button>
          </>
        }
        <br/>
        <button onClick={closeModal}>Close Modal</button>
      </ModalContainer>
    </Modal>
  );
};

AuthModal.propTypes = {
  /** Method used to close the modal */
  closeModal: PropTypes.func
};

export default AuthModal;
