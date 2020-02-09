import React, {useContext, useState} from 'react';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';
import {AnimatePresence, motion} from 'framer-motion';
import Column from 'zones/app/components/Column';
import {ReportContext} from 'zones/editor/contexts/ReportContext';
import styled from 'styled-components';

const leftSideNavVariants = {
  hidden: {
    width: 255,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    width: 255,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  expanded: {
    width: 255,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  collapsed: {
    width: 50,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const expandedVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      delay: 0.4
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4
    }
  }
};

const BlueBox = styled(motion.div)`
  margin: 24px;
  padding: 8px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue.v500};
`;

const RedBox = styled(motion.div)`
  margin: 8px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.red.v500};
`;

const LeftSideNav = () => {
  const [expandedLeftNav, setExpandedLeftNav] = useState(true);
  const {queries} = useContext(ReportContext);

  return (
    <Column variants={leftSideNavVariants} initial={'hidden'} animate={expandedLeftNav ? 'expanded' : 'collapsed'} color={colors.white} borderRight>
      <div>
        <Typography type="Subtitle">Left Nav</Typography>
        <button onClick={() => setExpandedLeftNav(!expandedLeftNav)}>Toggle</button>
      </div>
      <AnimatePresence
        exitBeforeEnter
      >
        {expandedLeftNav ?
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={expandedVariants}
          >
            {queries.map(
              (query, index) => <BlueBox key={query.name + index} variants={expandedVariants}>{query.name}</BlueBox>
            )}
          </motion.div>
          :
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={expandedVariants}
          >
            {queries.map(
              (query, index) => <RedBox key={query.name + index} variants={expandedVariants}>{query.id}</RedBox>
            )}
          </motion.div>
        }
      </AnimatePresence>
    </Column>
  );
};

export default LeftSideNav;
