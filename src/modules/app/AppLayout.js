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
  const {children, layoutKey} = props;

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <AppContainer
        key={layoutKey}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <AppContextProvider>
          <UserContextProvider>
            <ModalContextProvider>
              {children}
              <ModalOutlet/>
            </ModalContextProvider>
          </UserContextProvider>
        </AppContextProvider>
      </AppContainer>
    </AnimatePresence>
  );
};

AppLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the layout type */
  layoutKey: PropTypes.string
};

export default AppLayout;
