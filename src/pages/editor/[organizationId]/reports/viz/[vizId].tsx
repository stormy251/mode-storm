import React, {useContext} from 'react';
import {ModePage} from "lib/types/ModePage";
import Link from 'next/link';
import {UserContext} from 'zones/app';
import * as EditorZone from 'zones/editor';

const VisualizationPage:ModePage = () => {
  const {hasSeenEditor, setHasSeenEditor} = useContext(UserContext);

  if (!hasSeenEditor) {
    setHasSeenEditor();
  }

  return (
    <>
      <h1>Hi I am a report</h1>
      <Link href="/home/[organizationId]/discover" as="/home/mode/discover">
        <a>To discover</a>
      </Link>
    </>
  );
};

VisualizationPage.zone = EditorZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default VisualizationPage;
