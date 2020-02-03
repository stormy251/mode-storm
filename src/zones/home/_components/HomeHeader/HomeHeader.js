import React from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'capra/Typography';

const HomeHeaderContainer = styled(motion.div)`
	align-items: center;
	border-bottom: solid 1px slategrey;
	box-sizing: border-box;
	display: flex;
	height: 55px;
	padding: 0 1rem;
	width: 100%;
`;

const HomeHeader = (props) => {
  const {title} = props;

  return (
    <HomeHeaderContainer>
      <Typography
        type="Title"
      >
        {title}
      </Typography>

    </HomeHeaderContainer>
  );
};

HomeHeader.propTypes = {
  /** The title of the page. */
  title: PropTypes.string
};

export default HomeHeader;
