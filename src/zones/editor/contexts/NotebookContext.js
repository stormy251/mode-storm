import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const NotebookContext = createContext({
  init: () => {},
  name: ''
});

export const NotebookContextProvider = (props) => {
  const {children} = props;

  const [state, setState] = useState({
    init (initialState) {
      setState(() => {
        return {...initialState};
      });
    },
    name: 'Python Notebook'
  });

  return (
    <NotebookContext.Provider value={state}>
      {children}
    </NotebookContext.Provider>
  );
};

NotebookContextProvider.defaultProps = {
  children: null
};

NotebookContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node
};
