import React, { ChangeEvent, useEffect, useState } from 'react';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import './style.scss';
import useDebounce from 'hook/useDebounce';
import { useRouter } from 'hook/useRouter';

const suffix = (
	<SearchOutlined
		style={{
			fontSize: 16,
			color: 'rgba(160,174,192,0.9)',
		}}
	/>
);

const Header = () => {
	const [searchText, setSearchText] = useState<string>('');
	const debounceSearchTerm = useDebounce(searchText, 500);

	useEffect(() => {
		if (debounceSearchTerm) {
			axios
				.get('https://6057ff2dc3f49200173ad2f4.mockapi.io/user')
				.then(result => console.log(result.data));
		}
	}, [debounceSearchTerm]);
	const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
	};
	return (
		<nav className='border-b-2 border-fuchsia-600'>
			<div className='w-11/12 mx-auto flex items-center justify-center py-2'>
				<p className='font-header text-green-500 text-4xl'>ly cafa</p>
				<div className='mx-5 flex flex-row'>
					<div className='mr-2 cursor-pointer  font-semibold text-base text-gray-900'>
						{' '}
						Diễn đàn{' '}
					</div>
					<div className='cursor-pointer  font-semibold text-base text-gray-900'>
						{' '}
						Blog{' '}
					</div>
				</div>
				<div className='flex-1'>
					<Space direction='vertical' className='w-full'>
						<Input
							placeholder='Search'
							onChange={onChangeSearch}
							className='py-1 rounded-1xl'
							prefix={suffix}
						/>
					</Space>
				</div>

				<span className='p-2 cursor-pointer hover:text-back font-medium text-gray-600'>
					Đăng nhập
				</span>
				<span className='rounded-2xl p-1 bg-green-400 h-8 cursor-pointer font-medium px-3 hover:text-back text-gray-600'>
					Đăng ký
				</span>
			</div>
		</nav>
	);
};

export default Header;
