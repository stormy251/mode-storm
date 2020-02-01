import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext({
  init: () => {},
  apiBaseURL: ''
});

export const AppContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    apiBaseURL: 'localhost:3000/api'
  });

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.defaultProps = {
  children: null
};

AppContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
