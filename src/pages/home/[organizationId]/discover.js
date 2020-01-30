import React from 'react'
import Link from 'next/link';
import HomeLayout from 'components/layouts/HomeLayout';
import PropTypes from 'prop-types';

const DiscoverPage = (props) => {
	return (
		<>
			<Link href="/home/[organizationId]/spaces/[spaceId]" as="/home/mode/spaces/123">
				<a>To Test Spaces</a>
			</Link>
			<br/>
			<br/>
			<Link href="/home/[organizationId]/data_sources/[dataSourceId]" as="/home/mode/data_sources/345">
				<a>To Test Data Sources</a>
			</Link>
			<br/>
			<br/>
			<Link href="/">
				<a>To Dummy Page</a>
			</Link>
		</>
	)
};

DiscoverPage.LayoutComponent = HomeLayout;

DiscoverPage.propTypes = {
	organizationId: PropTypes.string
};

DiscoverPage.getInitialProps = async ({query}) => {
	const {organizationId} = query;
	return {
		organizationId,
		pageTitle: `${organizationId}: Discover`
	}
};

export default DiscoverPage;
