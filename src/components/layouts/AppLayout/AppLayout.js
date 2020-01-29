import React from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppContainer = styled(motion.div)`
	box-sizing: border-box;
	margin: 0;
	height: 100%;
	width: 100%;
`;

const AppLayout = (props) => {
	const {children, layoutKey} = props;

	return (
		<AnimatePresence
			exitBeforeEnter
		>
			<AppContainer
				key={layoutKey}
				initial={{opacity:0}}
				animate={{opacity:1}}
				exit={{opacity:0}}
			>
				{children}
			</AppContainer>
		</AnimatePresence>
	)
};

AppLayout.propTypes = {
	/** Any React node */
	children: PropTypes.node,
	/** String representing the layout type */
	layoutKey: PropTypes.string
};

export default AppLayout;
