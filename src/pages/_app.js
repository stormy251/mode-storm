import React from 'react';
import App from 'next/app';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.
import {
  AppLayout
} from 'modules/app';
import {userFetcher} from 'lib/fetchers/userFetcher';

export default class MyApp extends App {

  static async getInitialProps ({Component, ctx}) {
    const isServer = typeof window === 'undefined';

    if (isServer) {
      // Mock user API call
      const user = await userFetcher('admin');

      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return {user, pageProps};
    } else {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return {pageProps};
    }
  }

  render () {
    const {Component, pageProps, router, user} = this.props;
    const LayoutComponent = Component.LayoutComponent;

    return (
      <AppLayout
        layoutKey={LayoutComponent.name}
        user={user}
      >
        <LayoutComponent {...pageProps} transitionKey={router.route}>
          <Component {...pageProps}/>
        </LayoutComponent>
      </AppLayout>
    );
  }
}
