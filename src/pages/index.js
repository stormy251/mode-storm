import React, {useContext} from 'react'
import Link from 'next/link';
import {ModalContext} from 'lib/contexts/ModalContext';
import DummyLayout from 'components/layouts/DummyLayout';
import Modal from 'components/Modal';

const DummyModal = ({closeModal}) => {
	return (
		<Modal>
			<h1>Hi there I am a modal</h1>
			<button onClick={closeModal}>Close Modal</button>
		</Modal>
	);
};

const RootPage = () => {
	const {openModal, closeModal} = useContext(ModalContext);

	return (
		<>
			<h1>This is an entrypoint to the test playground.</h1>
			<Link href="/home/[organizationId]/spaces/[spaceId]" as="/home/mode/spaces/123">
				<a>To Discovery Page</a>
			</Link>
			<button onClick={() => openModal({Component:DummyModal, props:{closeModal}})}>Open dummy modal</button>
		</>
	)
};

RootPage.LayoutComponent = DummyLayout;

RootPage.propTypes = {};

RootPage.getInitialProps = async ({query}) => {
	const {organizationId} = query;
	return {
		organizationId,
		pageTitle: `Dummy Page`
	}
};

export default RootPage;
