import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {reportFetcher} from 'lib/fetchers/reportFetcher';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** An array of query detail objects */
  report?: any;
}

/** Method used to fetch the details for a given report */
export const reportInit = async (reportId): Promise<Props> => {
  const initData = {
    report: {}
  };
  initData.report = await reportFetcher(reportId);

  return initData;
};

export const ReportContext = createContext({
  queries: [],
  activeQuery: {
    name: '',
    id: 0,
    visualizations: []
  },
  ownerName: '',
  reportName: '',
  id: ''
});

export const ReportContextProvider = (props: Props) => {
  const {children, report} = props;

  const reInitState = () => {
    return {
      queries: report.queries,
      ownerName: report.owner.name,
      reportName: report.name,
      activeQuery: report.queries[0],
      id: report.id
    };
  };

  const [state, setState] = useState(reInitState());

  const handleReportsUpdate = () => {
    setState(() => {
      return reInitState();
    });
  };

  /* Watch the reports prop to determine if we should update the report state. */
  useEffect(handleReportsUpdate, [report]);

  return (
    <ReportContext.Provider value={state}>
      {children}
    </ReportContext.Provider>
  );
};
