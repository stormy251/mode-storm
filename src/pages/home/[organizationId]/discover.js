import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {HomeLayout} from 'modules/home';

const DiscoverPage = () => {
  return (
    <>
      <Link href="/home/[organizationId]/spaces/[spaceId]" as="/home/mode/spaces/123">
        <a>To Test Spaces</a>
      </Link>
      <br/>
      <br/>
      <Link href="/home/[organizationId]/data_sources/[dataSourceId]" as="/home/mode/data_sources/345">
        <a>To Test Data Sources</a>
      </Link>
      <br/>
      <br/>
      <Link href="/home/[organizationId]/spaces" as="/home/mode/spaces">
        <a>To all spaces route</a>
      </Link>
      <br/>
      <br/>
      <Link href="/editor/[organizationId]/reports/[reportId]" as="/editor/mode/reports/123456">
        <a>To Test Editor page</a>
      </Link>
      <br/>
      <br/>
      <Link href="/">
        <a>To Dummy Page</a>
      </Link>
    </>
  );
};

DiscoverPage.LayoutComponent = HomeLayout;

DiscoverPage.propTypes = {
  organizationId: PropTypes.string
};

DiscoverPage.getInitialProps = async ({query}) => {
  const {organizationId} = query;
  return {
    organizationId,
    pageTitle: 'Discover'
  };
};

export default DiscoverPage;
