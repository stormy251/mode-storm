import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const DefinitionContext = createContext({
  init: () => {},
  name: ''
});

export const DefinitionContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Snowflake'
  });

  return (
    <DefinitionContext.Provider value={state}>
      {children}
    </DefinitionContext.Provider>
  );
};

DefinitionContextProvider.defaultProps = {
  children: null
};

DefinitionContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
