import React from 'react';
import App from 'next/app';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.
import {
  AppLayout
} from 'modules/app';

export default class MyApp extends App {
  render () {
    const {Component, pageProps, router} = this.props;
    const LayoutComponent = Component.LayoutComponent;

    return (
      <AppLayout
        layoutKey={LayoutComponent.name}
      >
        <LayoutComponent {...pageProps} transitionKey={router.route}>
          <Component {...pageProps}/>
        </LayoutComponent>
      </AppLayout>
    );
  }
}
