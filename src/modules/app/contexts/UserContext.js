import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({
  init: () => {},
  name: ''
});

export const UserContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Stormy Adams'
  });

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.defaultProps = {
  children: null
};

UserContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
