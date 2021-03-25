//@ts-nocheck
import { Button, Input } from 'antd';
import { CATEGORIES, ICategory } from 'assets/const';
import DefaultLayout from 'components/Layout/DefaultLayout';
import RichEditor from 'components/RichEditor/RichEditor';
import Select from 'components/Select';
import React, { useCallback, useMemo, useState } from 'react';

const Submit = () => {
	const [title, setTitle] = useState('');
	const [richText, setRichText] = useState('');
	const [valueSelect, setValueSelect] = useState<any>(null);

	const changeTitle = useCallback((e: any) => {
		setTitle(e.target.value);
	}, []);
	const changeSelect = useCallback((v: any) => {
		setValueSelect(v);
	}, []);

	const checkButtonDisable = useMemo(() => {
		if (title.trim() !== '' && !!valueSelect) {
			return false;
		}
		return true;
	}, [title, valueSelect]);

	const handleChangeRichTextEditor = useCallback((valueText: string) => {
		setRichText(valueText);
	}, []);

	const savePost = () => {
		const { value, label } = valueSelect;
		console.log(value, label, richText, title);
	};

	const handleSelect = (v: ICategory, actionMeta: any) => {};
	return (
		<DefaultLayout hasSideBar={false}>
			{' '}
			<div className='container mx-auto flex justify-center'>
				{' '}
				<div>
					<div className='w-1/2 mb-2'>
						<Select
							option={CATEGORIES}
							onChangeSelect={changeSelect}
							value={valueSelect}
							defaultValue={-1}
						/>
					</div>
					<div className='bg-white p-5 rounded-md'>
						<Input
							suffix={`${title.length}/300`}
							className='rounded-md mb-3'
							value={title}
							maxLength={300}
							onChange={e => changeTitle(e)}
						/>
						<RichEditor
							value={richText}
							onChange={handleChangeRichTextEditor}
						/>
						<div className='flex justify-end mt-5'>
							<Button
								shape='round'
								size={'middle'}
								className='mr-2'
								style={{
									color: '#0079D3',
									borderColor: '#0079D3'
								}}>
								Save Draft
							</Button>
							<Button
								type='primary'
								shape='round'
								size={'middle'}
								onClick={savePost}
								disabled={checkButtonDisable}>
								Post
							</Button>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Submit;
