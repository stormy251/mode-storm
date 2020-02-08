import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import Typography from 'zones/app/components/Typography';
import {colors} from 'lib/theme';

const HomeHeaderContainer = styled(motion.div)`
	align-items: center;
	border-bottom: solid 1px ${colors.gray.v500};
	box-sizing: border-box;
	display: flex;
	height: 55px;
	min-height: 55px;
	padding: 0 1rem;
	width: 100%;
`;

interface Props {
  /** The title of the page. */
  title: string;
}

const HomeHeader = (props: Props) => {
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

export default HomeHeader;
