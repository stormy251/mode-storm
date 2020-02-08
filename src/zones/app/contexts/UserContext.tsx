import React, {createContext, ReactNode, useState} from 'react';
import {userFetcher} from 'lib/fetchers/userFetcher';

export interface UserContextProviderProps {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** user object detailing the information about the current user */
  user?: any;
}

export interface UserContext {
  /** If the user is basic or not tehe */
  basic?: boolean;
  /** If the user has seen a viz or an editor page */
  hasSeenEditor?: boolean;
  /** The current users name */
  name?: string;
  /** If the current user is signed in or not */
  signedIn?: boolean;
  /** Sign the current user out */
  signOut?: Function;
  /** Sign a new user in */
  signIn?: (userId: string) => {};
  /** Records if the current user has seen an editor or visualization page */
  setHasSeenEditor?: Function;
}

export const userInit = async (): Promise<UserContextProviderProps> => {
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

export const UserContextProvider = (props: UserContextProviderProps) => {
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
