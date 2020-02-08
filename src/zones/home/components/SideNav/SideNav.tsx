import React, {ReactNode, useContext} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {UserContext} from 'zones/app/contexts/UserContext';
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

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
}

const SideNav = (props: Props) => {
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

export default SideNav;
