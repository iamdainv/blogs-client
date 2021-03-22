import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

const DefaultLayout = props => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default DefaultLayout;
