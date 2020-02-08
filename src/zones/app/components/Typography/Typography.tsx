import React, {ReactNode} from 'react';
import styled, {css} from 'styled-components';

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

const typographyPropsMixin = ({align, color, display, marginBottom, noWrap}: Props) => {
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
  ${(props: Props) => typographyPropsMixin(props)}
`;

const HeaderText = styled.h2`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 36px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const HeroText = styled.h3`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 22px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const TitleText = styled.h4`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 16px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 20px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const SubtitleText = styled.h5`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 14px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 20px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const BodyText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 12px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 16px;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const SectionText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 11px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0.8px;
  line-height: 13px;
  text-transform: uppercase;
  ${(props: Props) => typographyPropsMixin(props)}
`;

const CaptionText = styled.p`
  font-family: ${STYLES.fontFamilies.graphik};
  font-size: 10px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 12px;
  ${(props: Props) => typographyPropsMixin(props)}
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

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** Sets the text-align css property */
  align?: 'center' | 'inherit' | 'left' | 'right' | 'justify';
  /** Sets the color css property */
  color?: string;
  /** Sets the display css property */
  display?: 'inherit' | 'initial' | 'block' | 'inline' | 'inline-block';
  /** Sets the bottom margin of the element to a CSS string value */
  marginBottom?: string;
  /** Sets the fixed width on the text containing element, as well as all the appropriate CSS to apply an ending ellipsis */
  noWrap?: boolean;
  /** Sets the core styles of the text to the predefined typography types */
  type: 'Display' | 'Header' | 'Hero' | 'Title' | 'Subtitle' | 'Body' | 'Section' | 'Caption';
}

/** The Typography component is responsible for ensuring all text rendered in the application is consistent. */
const Typography = (props: Props) => {
  const {type, children} = props;
  const TypographyComponent = typographyTypeMap[type] || typographyTypeMap['Body'];

  return (
    <TypographyComponent
      {...props}
    >
      {children}
    </TypographyComponent>
  );
};

export default Typography;
