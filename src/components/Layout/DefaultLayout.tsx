import Footer from 'components/Footer';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import React from 'react';

interface IProps {
	children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps) => {
	return (
		<>
			<Header />
			<div className=' flex justify-between md:w-11/12 mx-auto'>
				<div className='side-bar w-auto py-5 hidden lg:block flex-shrink-0'>
					<SideBar />
				</div>
				<div className='py-2 md:py-5 md:pl-5 md:pr-3 min-w-0 w-full'>
					{' '}
					{children} <Footer />
				</div>
			</div>
		</>
	);
};

export default DefaultLayout;
