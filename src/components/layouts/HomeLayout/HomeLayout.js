import React from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeLayoutContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
`;

const HomeLayout = (props) => {
	const {children, transitionKey, pageTitle} = props;

	return (
		<AnimatePresence
			exitBeforeEnter
		>
			<HomeLayoutContainer
				key={transitionKey}
				initial={{opacity:0, y: -20}}
				animate={{opacity:1, y: 0}}
				exit={{opacity:0, y: -20}}
			>
				<h1>{pageTitle}</h1>
				{children}
			</HomeLayoutContainer>
		</AnimatePresence>
	)
};

HomeLayout.propTypes = {
	/** Any React node */
	children: PropTypes.node,
	/** String representing the requested route name */
	transitionKey: PropTypes.string,
	/** String representing the page name */
	pageTitle: PropTypes.string
};

export default HomeLayout;
