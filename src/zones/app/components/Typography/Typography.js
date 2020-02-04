import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {colors} from 'lib/theme';

export const STYLES = {
  fontWeight: {
    medium: '400',
    regular: '500'
  },
  fontFamilies: {
    blender: "'Blender', Helvetica, Arial, sans-serif",
    graphik: "'Graphik', Helvetica, Arial, sans-serif"
  }
};

const typographyPropsMixin = ({align, color, display, marginBottom, noWrap}) => {
  return css`
    color: ${() => color};
    display: ${display ? display : 'inherit'};
    margin: 0 0 ${marginBottom} 0;
    overflow: ${noWrap ? 'hidden' : null};
    text-align: ${align ? align : 'inherit'};
    text-overflow: ${noWrap ? 'ellipsis' : null};
    white-space: ${noWrap ? 'noWrap' : null};
  `;
};

const DisplayText = styled.h1`
	font-family: ${STYLES.fontFamilies.blender};
  font-size: 28px;
  font-weight: ${STYLES.fontWeight.medium};
  letter-spacing: 0;
  line-height: 36px;
  ${(props) => typographyPropsMixin(props)}
`;

const HeaderText = styled.h2`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 36px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props) => typographyPropsMixin(props)}
`;

const HeroText = styled.h3`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 22px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props) => typographyPropsMixin(props)}
`;

const TitleText = styled.h4`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 16px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 20px;
  ${(props) => typographyPropsMixin(props)}
`;

const SubtitleText = styled.h5`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 14px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 20px;
  ${(props) => typographyPropsMixin(props)}
`;

const BodyText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 12px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 16px;
  ${(props) => typographyPropsMixin(props)}
`;

const SectionText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 11px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0.8px;
  line-height: 13px;
  text-transform: uppercase;
  ${(props) => typographyPropsMixin(props)}
`;

const CaptionText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 10px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 12px;
  ${(props) => typographyPropsMixin(props)}
`;

const typographyTypeMap = {
  'Display': DisplayText,
  'Header': HeaderText,
  'Hero': HeroText,
  'Title': TitleText,
  'Subtitle': SubtitleText,
  'Body': BodyText,
  'Section': SectionText,
  'Caption': CaptionText
};

/** The Typography component is responsible for ensuring all text rendered in the application is consistent. */
const Typography = (props) => {
  const {type, children, ...RemainingProps} = props;
  const TypographyComponent = typographyTypeMap[type] || typographyTypeMap['Body'];

  return (
    <TypographyComponent
      {...RemainingProps}
    >
      {children}
    </TypographyComponent>
  );
};

Typography.defaultProps = {
  align: 'inherit',
  children: null,
  color: colors.gray.v1200,
  display: 'inherit',
  marginBottom: '0',
  noWrap: false,
  type: 'Body-1'
};

Typography.propTypes = {
  /** Sets the text-align css property */
  align: PropTypes.oneOf(['center', 'inherit', 'left', 'right', 'justify']),
  /** Any React node */
  children: PropTypes.node,
  /** Sets the color css property */
  color: PropTypes.string,
  /** Sets the display css property */
  display: PropTypes.oneOf(['inherit', 'initial', 'block', 'inline', 'inline-block']),
  /** Sets the bottom margin of the element to a CSS string value */
  marginBottom: PropTypes.string,
  /** Sets the fixed width on the text containing element, as well as all the appropriate CSS to apply an ending ellipsis */
  noWrap: PropTypes.bool,
  /** Sets the core styles of the text to the predefined typography types */
  type: PropTypes.oneOf([
    'Display',
    'Header',
    'Hero',
    'Title',
    'Subtitle',
    'Body',
    'Section',
    'Caption'
  ])
};

export default Typography;
