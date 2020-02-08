import React from 'react';
import Link from 'next/link';
import HomeZone from 'zones/home';
import {ModePage} from 'zones/app/types/ModePage';

const DataSourcesPage: ModePage = () => {
  return (
    <>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

DataSourcesPage.zone = HomeZone;

export default DataSourcesPage;
