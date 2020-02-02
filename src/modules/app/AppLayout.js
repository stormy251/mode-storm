import React from 'react';
import {AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';
import {
  ModalContextProvider,
  UserContextProvider,
  AppContextProvider
} from 'modules/app';
import ModalOutlet from './_components/ModalOutlet';
import AppContainer from './_components/AppContainer';

const AppLayout = (props) => {
  const {children, layoutKey, user} = props;

  return (
    <AppContextProvider>
      <UserContextProvider user={user}>
        <ModalContextProvider>
          <AnimatePresence
            exitBeforeEnter
          >
            <AppContainer
              key={layoutKey}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
              {children}
              <ModalOutlet/>
            </AppContainer>
          </AnimatePresence>
        </ModalContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  );
};

AppLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the layout type */
  layoutKey: PropTypes.string,
  /** Object representing the information about the current user */
  user: PropTypes.object
};

export default AppLayout;
