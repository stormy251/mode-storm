import React, {useContext} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ModalContext} from 'modules/app';
import {DummyLayout} from 'modules/dummy';
import Modal from 'components/Modal';

const ModalContainer = styled.div`
	background-color: #ffffff;
	border-radius: 8px;
	padding: 8px;
`;

const DummyModal = ({closeModal}) => {
  return (
    <Modal>
      <ModalContainer>
        <h1>Hi there I am a modal</h1>
        <button onClick={closeModal}>Close Modal</button>
      </ModalContainer>
    </Modal>
  );
};

DummyModal.propTypes = {
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
      <button onClick={() => openModal({Component:DummyModal, props:{closeModal}})}>Open dummy modal</button>
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
