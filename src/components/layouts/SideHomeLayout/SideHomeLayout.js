import React from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';

const SideHomeLayout = (props) => {
	const {children, transitionKey} = props;

	return (
		<AnimatePresence
			exitBeforeEnter
		>
			<motion.div
				key={transitionKey}
				initial={{opacity:0, x: -20, backgroundColor: 'lightgrey'}}
				animate={{opacity:1, x: 0, backgroundColor: 'lightgrey'}}
				exit={{opacity:0, x: -20, backgroundColor: 'lightgrey'}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
};

SideHomeLayout.propTypes = {
	/** Any React node */
	children: PropTypes.node,
	/** String representing the requested route name */
	transitionKey: PropTypes.string
};

export default SideHomeLayout;
