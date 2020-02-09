import React, {useContext} from 'react';
import {ModePage} from 'lib/types/ModePage';
import Link from 'next/link';
import HomeZone from 'zones/home';
import {SpaceContext} from "zones/home/contexts/SpaceContext";
import Typography from 'zones/app/components/Typography';

const SpacesPage: ModePage = () => {
  const {reports} = useContext(SpaceContext);

  return (
    <>
      <div>
        <Typography type="Title">Reports under this space:</Typography>
        {reports.map((report, index) => <span key={report + index}>{report.name}</span>)}
      </div>
      <br/>
      <br/>
      <br/>
      <Link href="/home/[organizationId]/spaces/[spaceId]" as="/home/mode/spaces/345">
        <a>To Other spaces page</a>
      </Link>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

SpacesPage.zone = HomeZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default SpacesPage;
