import { CATEGORIES } from 'assets/const';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CategoryForums = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const changeCurentPage = (value: number) => {
		setCurrentPage(value);
	};
	return (
		<div style={{ width: 200, height: 'calc(100vh - 100px)' }}>
			<Scrollbars
				style={{ width: 200, height: '100%' }}
				autoHide
				autoHideTimeout={1000}
				autoHideDuration={200}
				universal={true}>
				{CATEGORIES.map((r, index) => (
					<div
						className={clsx(
							'text-gray-700  flex items-center py-2 px-1 hover:bg-green-400 hover:text-black hover:font-normal rounded-sm no-underline',
							index === currentPage && 'bg-green-400'
						)}
						onClick={() => changeCurentPage(index)}>
						<img
							className='w-6 h-6'
							alt=''
							src='https://image.flaticon.com/icons/png/128/4107/4107983.png'></img>
						<span className='ml-2 text-sm'>{r.label}</span>
					</div>
				))}
			</Scrollbars>
		</div>
	);
};

export default CategoryForums;
