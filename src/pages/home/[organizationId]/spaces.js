import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {HomeLayout} from 'modules/home';

const AllSpacesPage = () => {
  return (
    <>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To Discover</a>
      </Link>
    </>
  );
};

AllSpacesPage.LayoutComponent = HomeLayout;

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
