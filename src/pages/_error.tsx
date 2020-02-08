import React from 'react';
import {ModePage} from 'zones/app/types/ModePage';
import Link from 'next/link';
import HomeZone from 'zones/home';

// This page is used for our 404/page-not-found management
const ErrorPage: ModePage = () => {
  return (
    <>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </>
  );
};

ErrorPage.zone = HomeZone;

// Default export is a requirement for nextjs to know this is the export for the page.
export default ErrorPage;
