import EditorLayout from './EditorLayout';
import {ModeZone} from 'lib/types/ModeZone';

const EditorZone: ModeZone = {
  zoneInit: async () => {
    return {};
  },
  LayoutComponent: EditorLayout
};

export default EditorZone;
