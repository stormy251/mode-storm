import React from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';

const HomeLayout = (props) => {
	const {children, transitionKey} = props;

	return (
		<AnimatePresence
			exitBeforeEnter
		>
			<motion.div
				key={transitionKey}
				initial={{opacity:0, y: -20}}
				animate={{opacity:1, y: 0}}
				exit={{opacity:0, y: -20}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
};

HomeLayout.propTypes = {
	/** Any React node */
	children: PropTypes.node,
	/** String representing the requested route name */
	transitionKey: PropTypes.string
};

export default HomeLayout;
