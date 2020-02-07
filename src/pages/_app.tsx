import React from 'react';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.
import * as AppZone from 'zones/app';

const ModeStorm = ({Component, pageProps, router}) => {
  const {LayoutComponent} = Component.zone;

  return (
    <AppZone.LayoutComponent
      layoutKey={LayoutComponent.name}
      {...pageProps}
    >
      <LayoutComponent {...pageProps} transitionKey={router.asPath}>
        <Component {...pageProps}/>
      </LayoutComponent>
    </AppZone.LayoutComponent>
  );
};

ModeStorm.getInitialProps = async function ({Component, ctx}) {
  let pageProps = {};
  let pageZoneInitData = {};
  const appZoneInitData = await AppZone.zoneInit();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (Component.zone) {
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
