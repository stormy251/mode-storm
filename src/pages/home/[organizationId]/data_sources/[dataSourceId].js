import React from 'react'
import Link from 'next/link';
import HomeLayout from 'components/layouts/HomeLayout';
import PropTypes from 'prop-types';

const DataSourcesPage = (props) => {
	return (
		<>
			<Link href="/home/[organizationId]/discover" as="/home/mode/discover">
				<a>To discover</a>
			</Link>
		</>
	)
};

DataSourcesPage.LayoutComponent = HomeLayout;

DataSourcesPage.propTypes = {
	organizationId: PropTypes.string,
	dataSourceId: PropTypes.string
};

DataSourcesPage.getInitialProps = async ({query}) => {
	const {organizationId, dataSourceId} = query;
	return {
		organizationId,
		dataSourceId,
		pageTitle: `${organizationId}: datasource ${dataSourceId}`
	}
};

export default DataSourcesPage;
