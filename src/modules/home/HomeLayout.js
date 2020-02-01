import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideNav from './_components/SideNav';
import HomeHeader from './_components/HomeHeader';
import {
  DefinitionContextProvider,
  OrganizationContextProvider,
  SpaceContextProvider
} from 'modules/home';

const HomeLayoutContainer = styled(motion.div)`
	display: flex;
	height: 100%;
	width: 100%;
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

const HomeLayout = (props) => {
  const {children, transitionKey, pageTitle, organizationId} = props;

  return (
    <HomeLayoutContainer>
      <OrganizationContextProvider>
        <DefinitionContextProvider>
          <SpaceContextProvider>
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
                  initial={{opacity:0, y: 20}}
                  animate={{opacity:1, y: 0}}
                  exit={{opacity:0, y: 20}}
                  transition={{
                    duration: 0.3
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
  organizationId: PropTypes.string
};

export default HomeLayout;
