import EditorLayout from './EditorLayout';
import {ModeZone} from 'lib/types/ModeZone';
import {reportInit} from 'zones/editor/contexts/ReportContext';

const EditorZone: ModeZone = {
  zoneInit: async () => {
    const reportInitData = await reportInit('123456');
    return {
      ...reportInitData
    };
  },
  LayoutComponent: EditorLayout
};

export default EditorZone;
