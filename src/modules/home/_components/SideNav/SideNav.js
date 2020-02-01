import React from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideNavContainer = styled(motion.div)`
	background-color: #393945;
	display: flex;
	flex-direction: column;
	height: 100vh;
	min-width: 288px;
	width: 288px;
`;

const SideNav = (props) => {
  const {children} = props;

  return (
    <SideNavContainer>
      {children}
    </SideNavContainer>
  );
};

SideNav.propTypes = {
  /** Any React node */
  children: PropTypes.node
};

export default SideNav;
