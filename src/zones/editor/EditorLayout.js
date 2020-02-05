import React from 'react';
import {AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';
import {
  NotebookContextProvider,
  QueryContextProvider,
  ReportContextProvider,
  VisualizationContextProvider
} from 'zones/editor';
import Column from 'zones/app/components/Column';
import Row from 'zones/app/components/Row';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';

const contentVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const EditorLayout = (props) => {
  const {children, transitionKey, pageTitle} = props;

  return (
    <Row initial={false}>
      <NotebookContextProvider>
        <QueryContextProvider>
          <ReportContextProvider>
            <VisualizationContextProvider>
              <Column>
                <Row height={'48px'} color={colors.gray.v1100}>
                  <Typography type="Subtitle" color={colors.white}>{pageTitle}</Typography>
                </Row>
                <Row>
                  <AnimatePresence
                    exitBeforeEnter
                  >
                    <Column
                      key={transitionKey}
                      variants={contentVariants}
                      initial={'hidden'}
                      animate={'visible'}
                      exit={'hidden'}
                    >
                      {children}
                    </Column>
                  </AnimatePresence>
                </Row>
              </Column>
            </VisualizationContextProvider>
          </ReportContextProvider>
        </QueryContextProvider>
      </NotebookContextProvider>
    </Row>
  );
};

EditorLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the requested route name */
  transitionKey: PropTypes.string,
  /** String representing the page name */
  pageTitle: PropTypes.string,
  /** String representing the name of the current organization */
  organizationId: PropTypes.string
};

export default EditorLayout;
