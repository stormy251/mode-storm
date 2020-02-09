import React, {ReactNode} from 'react';
import {AnimatePresence} from 'framer-motion';
import Column from 'zones/app/components/Column';
import Row from 'zones/app/components/Row';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';
import {ReportContextProvider} from 'zones/editor/contexts/ReportContext';
import LeftSideNav from './components/LeftSideNav';
import QueryNavigatorBar from './components/QueryNavigatorBar';

const contentVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

export interface EditorLayoutProps {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
  /** String representing the requested route name */
  transitionKey: string;
  /** String representing the page name */
  pageTitle: string;
  /** String representing the name of the current organization */
  organizationId: string;
  /** Object representing the information for the current report */
  report: any;
}

const EditorLayout = (props: EditorLayoutProps) => {
  const {children, transitionKey, pageTitle, report} = props;

  return (
    <Column>
      <ReportContextProvider report={report}>
        <Row height={'48px'} color={colors.gray.v1100}>
          <Typography type="Subtitle" color={colors.white}>{pageTitle}</Typography>
        </Row>
        <Row>
          <AnimatePresence
            exitBeforeEnter
          >
            <Row
              key={transitionKey}
              variants={contentVariants}
              initial={'hidden'}
              animate={'visible'}
              exit={'hidden'}
            >
              <LeftSideNav/>
              <Column>
                <QueryNavigatorBar/>
                {children}
              </Column>
            </Row>
          </AnimatePresence>
        </Row>
      </ReportContextProvider>
    </Column>
  );
};

export default EditorLayout;
