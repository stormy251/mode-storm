import React, {useState} from 'react';
import {ModePage} from 'lib/types/ModePage';
import Link from 'next/link';
import {AnimatePresence} from 'framer-motion';
import Row from 'zones/app/components/Row';
import Column from 'zones/app/components/Column';
import {colors} from 'lib/theme';
import EditorZone from 'zones/editor';
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

const rightSideNavVariants = {
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

const ReportsPage: ModePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <Row custom={1} variants={sectionVariants}>
      <Column custom={2} variants={sectionVariants}>
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
