import {NotebookContext, NotebookContextProvider} from './contexts/NotebookContext';
import {QueryContext, QueryContextProvider} from './contexts/QueryContext';
import {ReportContext, ReportContextProvider} from './contexts/ReportContext';
import {VisualizationContext, VisualizationContextProvider} from './contexts/VisualizationContext';
import EditorLayout from './EditorLayout';

const zoneInit = async () => {

  return {};
};

const LayoutComponent = EditorLayout;

export {
  zoneInit,
  LayoutComponent,
  NotebookContext,
  NotebookContextProvider,
  QueryContext,
  QueryContextProvider,
  ReportContext,
  ReportContextProvider,
  VisualizationContext,
  VisualizationContextProvider
};
