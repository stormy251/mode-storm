import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const SpaceContext = createContext({
  init: () => {},
  name: ''
});

export const SpaceContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Personal'
  });

  return (
    <SpaceContext.Provider value={state}>
      {children}
    </SpaceContext.Provider>
  );
};

SpaceContextProvider.defaultProps = {
  children: null
};

SpaceContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
