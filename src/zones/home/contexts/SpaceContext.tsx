import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {spaceFetcher} from 'lib/fetchers/spaceFetcher';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** Array of report detail objects */
  reports?: any[];
}

export const spaceInit = async (spaceId): Promise<Props> => {
  const initData = {
    reports: []
  };

  if (spaceId) {
    const spaceData = await spaceFetcher(spaceId);
    initData.reports = spaceData.reports;
  }

  return initData;
};

export const SpaceContext = createContext({
  reports: []
});

export const SpaceContextProvider = (props: Props) => {
  const {children, reports} = props;

  const [state, setState] = useState({
    reports
  });

  const handleReportsUpdate = () => {
    setState((state) => {
      return {...state, reports};
    });
  };

  /* Watch the reports prop to determine if we should update the report state. */
  useEffect(handleReportsUpdate, [reports]);

  return (
    <SpaceContext.Provider value={state}>
      {children}
    </SpaceContext.Provider>
  );
};
