import {addParameters, addDecorator, configure} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {white, gray, blue} from 'lib/styles/colors';

/*
  Section: Addon configuration
  Description: This section will apply global Addon configuration for every story
*/

// --- Addon: backgrounds ---
addParameters({
  backgrounds: [
    {name: 'White Page', value: white, default: true},
    {name: 'Grey Page', value: gray['500']},
    {name: 'Blue Hover', value: blue['500']}
  ]
});

// --- Addon: a11y ---
addDecorator(withA11y);

/*
  Section: Stories imports
  Description: This section will leverage the webpack require.context to import all
  files ending in .stories.js from within any subdirectory of the components directory.
*/

configure(require.context('../src', true, /\.stories\.js$/), module);
