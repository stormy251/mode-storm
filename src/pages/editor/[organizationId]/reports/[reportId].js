import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {EditorLayout} from 'modules/editor';

const ReportsPage = () => {
  return (
    <>
      <h1>Hi I am a report</h1>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

ReportsPage.LayoutComponent = EditorLayout;

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
