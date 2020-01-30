import React, {useContext, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ModalContext} from 'lib/contexts/ModalContext';

const AppContainer = styled(motion.div)`
	box-sizing: border-box;
	height: 100%;
	margin: 0;
	overflow-y: hidden;
	width: 100%;
`;

const AppLayout = (props) => {
	const {children, layoutKey} = props;

	const {modalArray} = useContext(ModalContext);

	return (
		<>
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
			<AnimatePresence>
				{modalArray.map(
					(ModalConfig, index) => <ModalConfig.Component key={'modalOverlay' + index} {...ModalConfig.props}/>
				)}
			</AnimatePresence>
		</>
	)
};

AppLayout.propTypes = {
	/** Any React node */
	children: PropTypes.node,
	/** String representing the layout type */
	layoutKey: PropTypes.string
};

export default AppLayout;
