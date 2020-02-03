import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const OrganizationContext = createContext({
  init: () => {},
  name: ''
});

export const OrganizationContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Mode'
  });

  return (
    <OrganizationContext.Provider value={state}>
      {children}
    </OrganizationContext.Provider>
  );
};

OrganizationContextProvider.defaultProps = {
  children: null
};

OrganizationContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
