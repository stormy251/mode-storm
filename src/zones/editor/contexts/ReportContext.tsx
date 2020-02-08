import React, {createContext, ReactNode, useState} from 'react';
import {reportFetcher} from 'lib/fetchers/reportFetcher';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode
  /** An array of query detail objects */
  queries?: any[]
}

/** Method used to fetch the details for a given report */
export const reportInit = async (reportId): Promise<Props> => {
  return await reportFetcher(reportId);
};

export const ReportContext = createContext({
  queries: []
});

export const ReportContextProvider = (props: Props) => {
  const {children, queries} = props;

  const [state] = useState({
    queries
  });

  return (
    <ReportContext.Provider value={state}>
      {children}
    </ReportContext.Provider>
  );
};
