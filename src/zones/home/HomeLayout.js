import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import HomeHeader from './components/HomeHeader';
import {
  DefinitionContextProvider,
  OrganizationContextProvider,
  SpaceContextProvider
} from 'zones/home';
import {colors} from 'lib/theme';

const HomeLayoutContainer = styled(motion.div)`
	display: flex;
	height: 100%;
	width: 100%;
	background: ${colors.gray.v200};
`;

const ContentContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const homeVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const HomeLayout = (props) => {
  const {children, transitionKey, pageTitle, organizationId, reports} = props;

  return (
    <HomeLayoutContainer>
      <OrganizationContextProvider>
        <DefinitionContextProvider>
          <SpaceContextProvider reports={reports}>
            <SideNav>
              <span>{organizationId}</span>
            </SideNav>
            <Column>
              <HomeHeader title={pageTitle}/>
              <AnimatePresence
                exitBeforeEnter
              >
                <ContentContainer
                  key={transitionKey}
                  variants={homeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    staggerChildren: 0.6
                  }}
                >
                  {children}
                </ContentContainer>
              </AnimatePresence>
            </Column>
          </SpaceContextProvider>
        </DefinitionContextProvider>
      </OrganizationContextProvider>
    </HomeLayoutContainer>
  );
};

HomeLayout.propTypes = {
  /** Any React node */
  children: PropTypes.node,
  /** String representing the requested route name */
  transitionKey: PropTypes.string,
  /** String representing the page name */
  pageTitle: PropTypes.string,
  /** String representing the name of the current organization */
  organizationId: PropTypes.string,
  /** Array of report objs for the given space */
  reports: PropTypes.array
};

export default HomeLayout;
