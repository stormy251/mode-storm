import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const VisualizationContext = createContext({
  init: () => {},
  name: ''
});

export const VisualizationContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Bar Chart'
  });

  return (
    <VisualizationContext.Provider value={state}>
      {children}
    </VisualizationContext.Provider>
  );
};

VisualizationContextProvider.defaultProps = {
  children: null
};

VisualizationContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
