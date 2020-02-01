import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DummyLayoutContainer = styled(motion.div)`
	background-color: #128fdc;
	display: flex;
	height: 100vh;
	width: 100vw;
`;

const DummyLayout = (props) => {
  const {children, transitionKey} = props;

  return (
    <DummyLayoutContainer>
      <AnimatePresence
        exitBeforeEnter
      >
        <motion.div
          key={transitionKey}
          initial={{opacity:0, x: 200}}
          animate={{opacity:1, x: 0}}
          exit={{opacity:0, x: 200}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </DummyLayoutContainer>
  );
};

DummyLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the requested route name */
  transitionKey: PropTypes.string,
  /** String representing the page name */
  pageTitle: PropTypes.string
};

export default DummyLayout;
