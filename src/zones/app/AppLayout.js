import React from 'react';
import {AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';
import {
  ModalContextProvider,
  UserContextProvider,
  LaunchDarklyContextProvider
} from 'zones/app';
import ModalOutlet from './components/ModalOutlet';
import AppContainer from './components/AppContainer';

const AppLayout = (props) => {
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

AppLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the layout type */
  layoutKey: PropTypes.string,
  /** Object representing the launch darkly flags for the current user */
  flags: PropTypes.object,
  /** Object representing the information about the current user */
  user: PropTypes.object
};

export default AppLayout;
