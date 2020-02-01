import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const QueryContext = createContext({
  init: () => {},
  name: ''
});

export const QueryContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Best Customers'
  });

  return (
    <QueryContext.Provider value={state}>
      {children}
    </QueryContext.Provider>
  );
};

QueryContextProvider.defaultProps = {
  children: null
};

QueryContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
