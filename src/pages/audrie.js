import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import SideHomeLayout from 'components/layouts/SideHomeLayout/SideHomeLayout';

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: red;
`;

const AudriePage = () => {
	return (
		<>
			<Title>Audrie Page</Title>
			<Link href="/">
				<a>To Home</a>
			</Link>
			<Link href="/stormy">
				<a>To Stormy</a>
			</Link>
		</>
	)
};

AudriePage.LayoutOptions = {
	LayoutComponent: SideHomeLayout,
	layoutProps: {}
};

export default AudriePage;
