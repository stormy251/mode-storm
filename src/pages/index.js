import React, {useContext} from 'react';
import Link from 'next/link';
import AuthModal from 'components/AuthModal';
import {ModalContext} from 'zones/app';
import * as DummyZone from 'zones/dummy';

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

DummyPage.zone = DummyZone;

DummyPage.propTypes = {};

export default DummyPage;
