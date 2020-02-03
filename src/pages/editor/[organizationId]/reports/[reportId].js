import React, {useContext} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {UserContext} from 'zones/app';
import * as EditorZone from 'zones/editor';

const ReportsPage = () => {
  const {hasSeenEditor, setHasSeenEditor} = useContext(UserContext);

  if (!hasSeenEditor) {
    setHasSeenEditor();
  }

  return (
    <>
      <h1>Hi I am a report</h1>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

ReportsPage.zone = EditorZone;

ReportsPage.propTypes = {
  organizationId: PropTypes.string,
  reportId: PropTypes.string
};

ReportsPage.getInitialProps = async ({query}) => {
  const {organizationId, reportId} = query;
  return {
    organizationId,
    reportId,
    pageTitle: `ReportID - ${reportId} for Org: ${organizationId}`
  };
};

export default ReportsPage;
