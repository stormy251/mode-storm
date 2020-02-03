import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import {launchDarklyFetcher} from 'lib/fetchers/launchDarklyFetcher';

export const launchDarklyInit = async (user) => {
  let initData = {
    flags: {}
  };

  initData.flags = await launchDarklyFetcher(user);
  return initData;
};

export const LaunchDarklyContext = createContext({
  flags: {}
});

export const LaunchDarklyContextProvider = (props) => {
  const {children, flags} = props;

  const [state] = useState({
    flags
  });

  return (
    <LaunchDarklyContext.Provider value={state}>
      {children}
    </LaunchDarklyContext.Provider>
  );
};

LaunchDarklyContextProvider.defaultProps = {
  children: null,
  flags: {}
};

LaunchDarklyContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** Launch darkly flags specific to the current user */
  flags: PropTypes.object
};
