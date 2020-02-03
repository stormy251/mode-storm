import React from 'react';
import App from 'next/app';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.
import * as AppZone from 'zones/app';

export default class MyApp extends App {

  static async getInitialProps ({Component, ctx}) {
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
  }

  render () {
    const {Component, pageProps, router} = this.props;
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
  }
}
