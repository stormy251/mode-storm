import React from 'react';
import Link from 'next/link';
import * as HomeZone from 'zones/home';

const ErrorPage = () => {
  return (
    <>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </>
  );
};

ErrorPage.zone = HomeZone;

export default ErrorPage;
