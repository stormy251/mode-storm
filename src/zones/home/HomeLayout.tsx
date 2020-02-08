import React, {ReactNode} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import HomeHeader from './components/HomeHeader';
import {DefinitionContextProvider} from './contexts/DefinitionContext';
import {OrganizationContextProvider} from './contexts/OrganizationContext';
import {SpaceContextProvider} from './contexts/SpaceContext';
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

export interface HomeLayoutProps {
  /** Must be a single React node, it cannot contain a React fragment */
  children: ReactNode;
  /** String representing the requested route name */
  transitionKey: string;
  /** String representing the page name */
  pageTitle: string;
  /** String representing the name of the current organization */
  organizationId: string;
  /** Array of report objs for the given space */
  reports: any[];
}

const HomeLayout = (props: HomeLayoutProps) => {
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

export default HomeLayout;
