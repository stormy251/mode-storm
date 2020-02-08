import React, {ReactNode} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import {LaunchDarklyContextProvider} from './contexts/LaunchDarklyContext';
import {ModalContextProvider} from './contexts/ModalContext';
import {UserContextProvider} from './contexts/UserContext';
import ModalOutlet from './components/ModalOutlet';

export interface AppLayoutProps {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
  /** String representing the layout type */
  layoutKey: string;
  /** Object representing the launch darkly flags for the current user */
  flags: any;
  /** Object representing the information about the current user */
  user: any;
}

const AppContainer = styled(motion.div)`
	box-sizing: border-box;
	height: 100%;
	margin: 0;
	overflow-y: hidden;
	width: 100%;
`;


/**
 * This component is responsible for managing layout changes,
 * as well as facilitating a predictable pattern for global services such as modals/notifications/etc...
 */
const AppLayout = (props: AppLayoutProps) => {
  const {children, layoutKey, user, flags} = props;

  return (
    <LaunchDarklyContextProvider flags={flags}>
      <UserContextProvider user={user}>
        <ModalContextProvider>
          <AnimatePresence
            exitBeforeEnter
          >
            <AppContainer
              key={layoutKey}
              initial={false}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
              {children}
              <ModalOutlet/>
            </AppContainer>
          </AnimatePresence>
        </ModalContextProvider>
      </UserContextProvider>
    </LaunchDarklyContextProvider>
  );
};

export default AppLayout;
