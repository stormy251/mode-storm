import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {HomeLayout} from 'modules/home';

const SpacesPage = () => {
  return (
    <>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

SpacesPage.LayoutComponent = HomeLayout;

SpacesPage.propTypes = {
  organizationId: PropTypes.string,
  spaceId: PropTypes.string
};

SpacesPage.getInitialProps = async ({query}) => {
  const {organizationId, spaceId} = query;
  return {
    organizationId,
    spaceId,
    pageTitle: `${organizationId}: space - ${spaceId}`
  };
};

export default SpacesPage;
