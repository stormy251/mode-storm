import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const ReportContext = createContext({
  init: () => {},
  name: ''
});

export const ReportContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Stormys report'
  });

  return (
    <ReportContext.Provider value={state}>
      {children}
    </ReportContext.Provider>
  );
};

ReportContextProvider.defaultProps = {
  children: null
};

ReportContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
