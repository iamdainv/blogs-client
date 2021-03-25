//@ts-nocheck
//@ts-ignore
import React, { useState } from 'react';
import Select from 'react-select';
import { CATEGORIES } from 'assets/const';
const options: [{ [key: string]: string }] = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];

interface IProps {
	value: ICategory;
	onChangeSelect: (value: any) => void;
	option: ICategory[];
	defaultValue: number;
}

const SelectC = ({ value, onChangeSelect, option, defaultValue }: IProps) => {
	console.log(value);

	return (
		<>
			<Select
				value={value !== -1 ? value : null}
				onChange={v => onChangeSelect(v)}
				options={option}
				placeholder='Choose a community'
			/>
		</>
	);
};

export default React.memo(SelectC);
