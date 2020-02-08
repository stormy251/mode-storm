import {ModePage} from 'lib/types/ModePage';
import {NextRouter} from 'next/router';
import React from 'react';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.
import AppLayout from 'zones/app/AppLayout';
import AppZone from 'zones/app';

interface Props {
  Component?: ModePage;
  pageProps?: any;
  router: NextRouter;
}

const ModeStorm = ({Component, pageProps, router}: Props) => {
  const {LayoutComponent} = Component.zone;

  return (
    <AppLayout
      layoutKey={LayoutComponent.name}
      {...pageProps}
    >
      <LayoutComponent {...pageProps} transitionKey={router.asPath}>
        <Component {...pageProps}/>
      </LayoutComponent>
    </AppLayout>
  );
};

ModeStorm.getInitialProps = async function ({Component, ctx}) {
  let pageProps = {};
  let pageZoneInitData = {};
  const appZoneInitData = await AppZone.zoneInit();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (Component.zoneInit) {
    pageZoneInitData = await Component.zone.zoneInit(ctx);
  }

  return {
    pageProps: {
      ...pageProps,
      ...appZoneInitData,
      ...pageZoneInitData
    }
  };
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default ModeStorm;
