import React from 'react';
import DefaultLayout from 'components/Layout/DefaultLayout';
import CardForums from 'components/CardForums/CardForums';

const Home = () => {
	return (
		<DefaultLayout>
			{' '}
			App work : hello reactjs version : {React.version}{' '}
			{[1, 2, 3, 4].map(item => (
				<CardForums />
			))}
		</DefaultLayout>
	);
};

export default Home;
