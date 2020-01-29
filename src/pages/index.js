import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import HomeLayout from 'components/layouts/HomeLayout/HomeLayout';

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: blue;
`;

const HomePage = () => {
	return (
		<>
			<Title>Home Page</Title>
			<Link href="/stormy">
				<a>To Stormy</a>
			</Link>
			<Link href="/audrie">
				<a>To Audrie</a>
			</Link>
		</>
	)
};

HomePage.LayoutOptions = {
	LayoutComponent: HomeLayout,
	layoutProps: {}
};

export default HomePage;
