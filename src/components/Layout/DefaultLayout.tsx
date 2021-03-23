import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';

interface IProps {
	children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default DefaultLayout;
