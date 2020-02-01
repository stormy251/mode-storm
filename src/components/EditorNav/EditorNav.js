import React from 'react'
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'capra/Typography';
import {white} from 'lib/styles/colors';

const EditorNavContainer = styled(motion.div)`
	align-items: center;
	background-color: #393945;
	box-sizing: border-box;
	color: #ffffff;
	display: flex;
	height: 55px;
	padding: 0 1rem;
	width: 100%;
`;

const EditorNav = (props) => {
	const {title} = props;

	return (
		<EditorNavContainer>
			<Typography type="Title" color={white}>
				{title}
			</Typography>
		</EditorNavContainer>
	)
};

EditorNav.propTypes = {
	/** The title of the page. */
	title: PropTypes.string
};

export default EditorNav;
