import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'lib/theme';

const Column = styled(motion.div)<{
  color?: string;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  width?: string;
  height?: string;
}>`
	box-sizing: border-box;
	background-color: ${({color}) => color ? color : null};
	border-bottom: ${({borderBottom}) => borderBottom ? `1px solid ${colors.gray.v500}` : null};
	border-left: ${({borderLeft}) => borderLeft ? `1px solid ${colors.gray.v500}` : null};
	border-right: ${({borderRight}) => borderRight ? `1px solid ${colors.gray.v500}` : null};
	border-top: ${({borderTop}) => borderTop ? `1px solid ${colors.gray.v500}` : null};
	display: flex;
	flex-direction: column;
	height: ${({height}) => height ? height : '100%'};
  min-height: ${({height}) => height ? height : '100%'};
	max-width: ${({width}) => width ? width : '100%'};
	width: ${({width}) => width ? width : '100%'};
`;

export default Column;
