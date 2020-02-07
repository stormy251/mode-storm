import styled from 'styled-components';
import {motion} from 'framer-motion';

const Row = styled(motion.div)<{
  align?: string,
  color?: string,
  height?: string,
  width?: string,
  justify?: string
}>`
	align-items: ${({align}) => align ? align : null};
	background-color: ${({color}) => color};
	display: flex;
	height: ${({height}) => height ? height : '100%'};
	min-height: ${({height}) => height ? height : '100%'};
	width: ${({width}) => width ? width : '100%'};
	min-width: ${({width}) => width ? width : '100%'};
	justify-content: ${({justify}) => justify ? justify : null};
`;

export default Row;
