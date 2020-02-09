import React, {ReactNode} from 'react';
import {AnimatePresence} from 'framer-motion';
import Column from 'zones/app/components/Column';
import Row from 'zones/app/components/Row';
import {ReportContextProvider} from 'zones/editor/contexts/ReportContext';
import LeftSideNav from 'zones/editor/components/LeftSideNav';
import QueryNavigatorBar from 'zones/editor/components/QueryNavigatorBar';
import EditorHeader from 'zones/editor/components/EditorHeader';

const contentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

export interface EditorLayoutProps {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
  /** String representing the requested route name */
  transitionKey: string;
  /** String representing the name of the current organization */
  organizationId: string;
  /** Object representing the information for the current report */
  report: any;
}

const EditorLayout = (props: EditorLayoutProps) => {
  const {children, transitionKey, report} = props;

  return (
    <Column>
      <ReportContextProvider report={report}>
        <EditorHeader/>
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
