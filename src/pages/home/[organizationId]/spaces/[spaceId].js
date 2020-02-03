import React, {useContext} from 'react';
import Link from 'next/link';
import * as HomeZone from 'zones/home';
import Typography from 'capra/Typography';

const SpacesPage = () => {
  const {reports} = useContext(HomeZone.SpaceContext);

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

SpacesPage.getInitialProps = async ({query}) => {
  const {organizationId, spaceId} = query;

  return {
    pageTitle: `${organizationId}: space - ${spaceId}`
  };
};

export default SpacesPage;
