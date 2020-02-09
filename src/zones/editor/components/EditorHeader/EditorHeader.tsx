import React, {useContext} from 'react';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';
import Row from 'zones/app/components/Row';
import Column from 'zones/app/components/Column';
import {ReportContext} from 'zones/editor/contexts/ReportContext';

const EditorHeader = () => {
  const {reportName, ownerName} = useContext(ReportContext);

  return (
    <Row height={'48px'} color={colors.gray.v1100}>
      <Column>
        <Typography type="Subtitle" color={colors.white}>Owner: {ownerName}</Typography>
        <Typography type="Subtitle" color={colors.white}>Report Name: {reportName}</Typography>
      </Column>
    </Row>
  );
};

export default EditorHeader;
