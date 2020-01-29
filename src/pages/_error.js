import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import HomeLayout from 'components/layouts/HomeLayout/HomeLayout';

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: red;
`;

const ErrorPage = () => {
	return (
		<>
			<Title>Error Page</Title>
			<Link href="/">
				<a>Back Home</a>
			</Link>
		</>
	)
};

ErrorPage.LayoutOptions = {
	LayoutComponent: HomeLayout,
	layoutProps: {}
};

export default ErrorPage;
