import React from 'react';
import DefaultLayout from 'components/Layout/DefaultLayout';

const Home = () => {
	return (
		<DefaultLayout>
			{' '}
			App work : hello reactjs version : {React.version}{' '}
		</DefaultLayout>
	);
};

export default Home;
