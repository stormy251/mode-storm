import React, {createContext, ReactNode, useState} from 'react';
import {userFetcher} from 'lib/fetchers/userFetcher';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** user object detailing the information about the current user */
  user?: any;
}

export const userInit = async (): Promise<Props> => {
  const initData = {
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
  signIn: (userId: string) => {},
  setHasSeenEditor: () => {}
});

export const UserContextProvider = (props: Props) => {
  const {children, user} = props;

  const [state, setState] = useState({
    name: user.name,
    signedIn: !!user,
    basic: user.basic || true,
    hasSeenEditor: false,
    setHasSeenEditor (): void {
      setState((state) => {
        return {...state,
          hasSeenEditor: true
        };
      });
    },
    signOut (): void {
      setState((state) => {
        return {...state,
          name: undefined,
          signedIn: false,
          basic: true,
          hasSeenEditor: false
        };
      });
    },
    async signIn (userId: string): Promise<void> {
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
