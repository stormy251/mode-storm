import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as HomeZone from 'zones/home';

const AllSpacesPage = () => {
  return (
    <>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To Discover</a>
      </Link>
    </>
  );
};

AllSpacesPage.zone = HomeZone;

AllSpacesPage.propTypes = {
  organizationId: PropTypes.string
};

AllSpacesPage.getInitialProps = async ({query}) => {
  const {organizationId} = query;
  return {
    organizationId,
    pageTitle: `Show all spaces for ${organizationId}`
  };
};

export default AllSpacesPage;
