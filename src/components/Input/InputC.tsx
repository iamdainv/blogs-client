import { Input } from 'antd';
import React, { useCallback, useState } from 'react';

const InputC = () => {
	const [title, setTitle] = useState('');
	const changeTitle = useCallback((e: any) => {
		setTitle(e.target.value);
	}, []);

	return (
		<>
			<Input
				suffix={`${title.length}/300`}
				className='rounded-md mb-3'
				value={title}
				maxLength={300}
				onChange={e => changeTitle(e)}
			/>
		</>
	);
};

export default InputC;
