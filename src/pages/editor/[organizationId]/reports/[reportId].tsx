import React, {useState} from 'react';
import {ModePage} from "lib/types/ModePage";
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import Row from 'zones/app/components/Row';
import Column from 'zones/app/components/Column';
import {colors} from 'lib/theme';
import * as EditorZone from 'zones/editor';
import Typography from 'zones/app/components/Typography';

const sectionVariants = {
  visible: sectionNumOffset => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.33,
      staggerDirection: 1,
      delayChildren: (0.375 * sectionNumOffset)
    }
  }),
  hidden: sectionNumOffset => ({
    opacity: 0,
    transition: {
      staggerChildren: 0.33,
      staggerDirection: 1,
      delayChildren: (0.375 * sectionNumOffset)
    }
  })
};

const sideNavVariants = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    width: 255,
    transition: {
      duration: 0.3
    }
  }
};

const articleVariants = {
  hidden: {
    opacity: 0,
    z: -2,
    y: -2
  },
  visible: {
    opacity: 1,
    z: 0,
    y: 0
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

const ReportsPage:ModePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [expandedLeftNav, setExpandedLeftNav] = useState(true);

  return (
    <Row custom={1} variants={sectionVariants} width={'100vw'}>
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
              <BlueBox variants={expandedVariants}/>
              <BlueBox variants={expandedVariants}/>
              <BlueBox variants={expandedVariants}/>
            </motion.div>
            :
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={expandedVariants}
            >
              <RedBox variants={expandedVariants}/>
              <RedBox variants={expandedVariants}/>
              <RedBox variants={expandedVariants}/>
            </motion.div>
          }
        </AnimatePresence>
      </Column>
      <Column custom={2} variants={sectionVariants}>
        <Row variants={articleVariants} color={colors.gray.v500} height={'40px'} align="center" justify={'space-between'}>
          <Typography type="Subtitle">Query 1</Typography>
          <button onClick={() => setSideBarOpen(!sideBarOpen)}>Toggle right nav</button>
        </Row>
        <Row variants={articleVariants}>
          <Column custom={2} variants={sectionVariants}>
            <Column variants={articleVariants} color={colors.black} height={'50%'}>
              <Row color={'rgba(255, 255, 255, 0.2)'} height={'40px'}>
                <Typography type="Subtitle" color={colors.white}>Editor Header</Typography>
              </Row>
              <Row>
                <Typography type="Subtitle" color={colors.white}>Editor</Typography>
              </Row>
            </Column>
            <Row variants={articleVariants} color={colors.white} height={'50%'}>
              <Column variants={articleVariants}>
                <Typography type="Subtitle">Results View</Typography>
                <br/>
                <br/>
                <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
                  <a>To discover</a>
                </Link>
              </Column>
            </Row>
          </Column>
          <AnimatePresence
            exitBeforeEnter
          >
            {sideBarOpen &&
              <Column custom={4} variants={sideNavVariants} exit="hidden" width={'255px'} color={colors.white} borderLeft>
                <BlueBox variants={expandedVariants}/>
              </Column>
            }
          </AnimatePresence>
        </Row>
      </Column>
    </Row>
  );
};

ReportsPage.zone = EditorZone;

ReportsPage.getInitialProps = async ({query}) => {
  const {organizationId, reportId} = query;
  return {
    organizationId,
    reportId,
    pageTitle: `ReportID - ${reportId} for Org: ${organizationId}`
  };
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default ReportsPage;
