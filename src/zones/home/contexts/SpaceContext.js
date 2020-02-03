import React, {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {spaceFetcher} from 'lib/fetchers/spaceFetcher';

export const spaceInit = async (spaceId) => {
  let initData = {
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

export const SpaceContextProvider = (props) => {
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

SpaceContextProvider.defaultProps = {
  children: null,
  reports: []
};

SpaceContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** Array of report objs for the given space */
  reports: PropTypes.array
};
