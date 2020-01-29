import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import HomeLayout from 'components/layouts/HomeLayout/HomeLayout';

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: red;
`;

const StormyPage = () => {
	return (
		<>
			<Title>Stormy Page</Title>
			<Link href="/">
				<a>To Home</a>
			</Link>
			<Link href="/audrie">
				<a>To Audrie</a>
			</Link>
		</>
	)
};

StormyPage.LayoutOptions = {
	LayoutComponent: HomeLayout,
	layoutProps: {}
};

export default StormyPage;
