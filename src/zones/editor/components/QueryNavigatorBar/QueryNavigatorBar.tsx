import React, {useContext} from 'react';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';
import Row from 'zones/app/components/Row';
import {ReportContext} from 'zones/editor/contexts/ReportContext';
import Link from 'next/link';

const QueryNavigatorBar = () => {
  const {activeQuery, id} = useContext(ReportContext);
  const visualizations = activeQuery.visualizations;

  return (
    <Row color={colors.gray.v500} height={'40px'} align="center">
      <Typography type="Subtitle">{activeQuery.name}</Typography>
      <Link href="/editor/[organizationId]/reports/[reportId]" as={`/editor/mode/reports/${id}`}>
        <a>SQL</a>
      </Link>
      {visualizations.map((visualization, index) => {
        return (
          <Link key={visualization.id + index} href="/editor/[organizationId]/reports/[reportId]/viz/[vizId]" as={`/editor/mode/reports/${id}/viz/${visualization.id}`}>
            <a>{visualization.name}</a>
          </Link>
        );
      })}
    </Row>
  );
};

export default QueryNavigatorBar;
