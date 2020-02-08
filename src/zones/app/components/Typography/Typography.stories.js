import React, {useState} from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import {colors} from 'lib/theme';
import {Row} from 'zones/app/components/Row';

const StoryColumn = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

/*
  Section: Primary Story
  Description: This is the story that will be showcased on the docs page
*/
export const primary = () => {
  return (
    <StoryColumn>
      <Typography
        type="Display"
      >
        Display
      </Typography>
      <Typography
        type="Header"
      >
        Header
      </Typography>
      <Typography
        type="Hero"
      >
        Hero
      </Typography>
      <Typography
        type="Title"
      >
        Title
      </Typography>
      <Typography
        type="Subtitle"
      >
        Subtitle
      </Typography>
      <Typography
        type="Body"
      >
        Body
      </Typography>
      <Typography
        type="Section"
      >
        Section
      </Typography>
      <Typography
        type="Caption"
      >
        Caption
      </Typography>
    </StoryColumn>
  );
};

/*
  Section: Stories
  Description: This section is for displaying all the key variations, or examples of the component
*/
export const AlignShowcase = () => {
  const [alignType, setAlignType] = useState('center');
  const alignTypes = ['center', 'inherit', 'left', 'right', 'justify'];

  return (
    <div>
      <Row align={'center'} width={'100%'} justify={'space-around'}>
        {alignTypes.map((type) => <button key={type} onClick={() => setAlignType(type)}>{type}</button>)}
      </Row>
      <Typography
        type="Body"
        align={alignType}
      >
        Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode Mode
      </Typography>
    </div>
  );
};

export const MarginBottomShowcase = () => {
  const [marginBottom, setMarginBottom] = useState('0');
  const marginBottomValues = ['0', '2px', '4px', '8px', '16px', '24px', '36px'];

  return (
    <div>
      <Row align={'center'} width={'100%'} justify={'space-around'}>
        {marginBottomValues.map((value) => <button key={value} onClick={() => setMarginBottom(value)}>{value}</button>)}
      </Row>
      <Typography
        type="Body"
        marginBottom={marginBottom}
      >
        Hello
      </Typography>
      <Typography
        type="Body"
      >
        World
      </Typography>
    </div>
  );
};

export const ColorShowcase = () => {

  return (
    <div>
      <Typography
        type="Body"
      >
        Default
      </Typography>
      <Typography
        type="Body"
        color={colors.green.v500}
      >
        Green
      </Typography>
      <Typography
        type="Body"
        color={colors.blue.v500}
      >
        Blue
      </Typography>
    </div>
  );
};

/*
  Section: Story Component File (SCF)
  Description: This section is default config for the component. The title is the path structure for the storybook
  tree view.
*/
export default {
  title: 'Zones/App/Typography',
  component: Typography
};
