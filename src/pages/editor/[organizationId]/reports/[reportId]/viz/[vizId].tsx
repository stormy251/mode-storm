import React, {useState} from 'react';
import {ModePage} from 'lib/types/ModePage';
import EditorZone from 'zones/editor';
import Column from 'zones/app/components/Column';
import Row from 'zones/app/components/Row';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';
import {AnimatePresence} from 'framer-motion';
import Link from 'next/link';

const sectionVariants = {
  visible: sectionNumOffset => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
      delayChildren: (0.2 * sectionNumOffset)
    }
  }),
  hidden: sectionNumOffset => ({
    opacity: 0,
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
      delayChildren: (0.2 * sectionNumOffset)
    }
  })
};

const rightSideNavVariants = {
  hidden: {
    width: 0
  },
  visible: {
    width: 255
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

const VisualizationPage: ModePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <Row custom={1} variants={sectionVariants}>
      <Column custom={2} variants={sectionVariants}>
        <Row variants={articleVariants}>
          <Column custom={2} variants={sectionVariants} color={colors.blue.v300}>
            <Typography type="Subtitle">Look I am a visualization page</Typography>
            <br/>
            <br/>
            <Link href="/editor/[organizationId]/reports/[reportId]" as="/editor/mode/reports/123456">
              <a>To first test report page</a>
            </Link>
          </Column>
          <AnimatePresence
            exitBeforeEnter
          >
            {sideBarOpen &&
              <Column custom={4} variants={rightSideNavVariants} exit="hidden" width={'255px'} color={colors.white} borderLeft>
                <Typography type="Subtitle">Right Side nav</Typography>
              </Column>
            }
          </AnimatePresence>
        </Row>
      </Column>
    </Row>
  );
};

VisualizationPage.zone = EditorZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default VisualizationPage;
