import React, {useContext} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ModalContext, UserContext} from 'modules/app';
import {DummyLayout} from 'modules/dummy';
import Modal from 'components/Modal';
import {colors} from 'lib/theme';

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

const DummyPage = () => {
  const {openModal, closeModal} = useContext(ModalContext);

  return (
    <>
      <h1>This is an entrypoint to the test playground.</h1>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To Discovery Page</a>
      </Link>
      <button
        onClick={() => openModal({Component:AuthModal, props:{closeModal}})}
      >
        Open auth Modal
      </button>
    </>
  );
};

DummyPage.LayoutComponent = DummyLayout;

DummyPage.propTypes = {};

DummyPage.getInitialProps = async ({query}) => {
  const {organizationId} = query;
  return {
    organizationId,
    pageTitle: 'Dummy Page'
  };
};

export default DummyPage;
