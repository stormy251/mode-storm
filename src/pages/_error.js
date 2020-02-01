import React from 'react';
import Link from 'next/link';
import {HomeLayout} from 'modules/home';

const ErrorPage = () => {
  return (
    <>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </>
  );
};

ErrorPage.LayoutComponent = HomeLayout;

export default ErrorPage;
