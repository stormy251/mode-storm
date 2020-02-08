import React, {useContext} from "react";
import {colors} from "lib/theme";
import Typography from "zones/app/components/Typography";
import Row from "zones/app/components/Row";
import {ReportContext} from "zones/editor/contexts/ReportContext";

const QueryNavigatorBar = () => {
  const {queries} = useContext(ReportContext);

  return (
    <Row color={colors.gray.v500} height={'40px'} align="center" justify={'space-between'}>
      <Typography type="Subtitle">Query 1</Typography>
    </Row>
  )
};

export default QueryNavigatorBar;
