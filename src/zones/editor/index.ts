import EditorLayout from './EditorLayout';
import {ModeZone} from 'lib/types/ModeZone';
import {reportInit} from 'zones/editor/contexts/ReportContext';

const EditorZone: ModeZone = {
  zoneInit: async ({query}) => {
    const {reportId} = query;
    const reportInitData = await reportInit(reportId);
    return {
      ...reportInitData
    };
  },
  LayoutComponent: EditorLayout
};

export default EditorZone;
