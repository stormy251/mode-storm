import React from 'react';
import {ModePage} from 'lib/types/ModePage'
import Link from 'next/link';
import Typography from 'zones/app/components/Typography';
import * as HomeZone from 'zones/home';

interface Props {
  pageTitle?: string;
}

const AllSpacesPage:ModePage<Props> = () => {
  return (
    <>
      <Typography type="Title">
        All Spaces Page!
      </Typography>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To Discover</a>
      </Link>
    </>
  );
};

AllSpacesPage.zone = HomeZone;

AllSpacesPage.getInitialProps = async () => {
  return {
    pageTitle: 'All spaces'
  }
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default AllSpacesPage;
