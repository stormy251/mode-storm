import React, {createContext, useState} from 'react';
import {userFetcher} from 'lib/fetchers/userFetcher';
import PropTypes from 'prop-types';

export const userInit = async () => {
  let initData = {
    user: {}
  };
  const isServer = typeof window === 'undefined';

  if (isServer) {
    // Mock user API call
    initData.user = await userFetcher('admin');
  }

  return initData;
};

export const UserContext = createContext({
  basic: true,
  hasSeenEditor: false,
  name: '',
  signedIn: false,
  signOut: () => {},
  signIn: () => {},
  setHasSeenEditor: () => {}
});

export const UserContextProvider = (props) => {
  const {children, user} = props;

  const [state, setState] = useState({
    name: user.name,
    signedIn: !!user,
    basic: user.basic || true,
    hasSeenEditor: false,
    setHasSeenEditor () {
      setState((state) => {
        return {...state,
          hasSeenEditor: true
        };
      });
    },
    signOut () {
      setState((state) => {
        return {...state,
          name: undefined,
          signedIn: false,
          basic: true,
          hasSeenEditor: false
        };
      });
    },
    async signIn (userId) {
      const user = await userFetcher(userId);

      setState((state) => {
        return {...state,
          signedIn: !!user,
          name: user.name
        };
      });
    }
  });

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.defaultProps = {
  children: null,
  user: {}
};

UserContextProvider.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** Object representing the information about the current user */
  user: PropTypes.object
};
