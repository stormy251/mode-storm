import App from 'next/app';
import React from 'react';
import AppLayout from 'components/layouts/AppLayout/AppLayout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const LayoutComponent = Component.LayoutComponent;

    return (
      <AppLayout
        layoutKey={LayoutComponent.name}
      >
        <LayoutComponent {...pageProps} transitionKey={router.route}>
          <Component {...pageProps}/>
        </LayoutComponent>
      </AppLayout>
    )
  }
}
