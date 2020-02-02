import React, {useContext} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {colors} from 'lib/theme';
import Typography from 'capra/Typography';
import {UserContext} from 'modules/app';

const AppContentContainer = styled(motion.div)`
	box-sizing: border-box;
	height: 100%;
	margin: 0;
	overflow-y: hidden;
	width: 100%;
`;

const HasSeenEditorPanel = styled(motion.div)`
	position: fixed;
	right: 30px;
	bottom: 30px;
	padding: 8px;
	background-color: ${({hasSeenEditor}) => hasSeenEditor ? colors.green.v500 : colors.red.v600};
`;

const AppContainer = (props) => {
  const {children} = props;

  const {hasSeenEditor} = useContext(UserContext);

  return (
    <AppContentContainer {...props}>
      {children}
      <HasSeenEditorPanel hasSeenEditor={hasSeenEditor}>
        <Typography
          color={colors.white}
          align="center"
          type="Title"
        >
					The user {hasSeenEditor ? 'HAS' : '- HAS NOT -'} seen the editor page
        </Typography>
      </HasSeenEditorPanel>
    </AppContentContainer>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node
};

export default AppContainer;
