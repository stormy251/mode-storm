import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {UserContext} from 'zones/app';
import {colors} from 'lib/theme';
import Typography from 'zones/app/components/Typography';

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
  const {name, signedIn} = useContext(UserContext);

  return (
    <SideNavContainer>
      <Typography
        color={colors.white}
        type="Subtitle"
      >
        {signedIn ?
          <span>
            {name} is signed in!
          </span>
          :
          <span>
            Hi Guest
          </span>
        }
      </Typography>
      {children}
    </SideNavContainer>
  );
};

SideNav.propTypes = {
  /** Any React node */
  children: PropTypes.node
};

export default SideNav;
