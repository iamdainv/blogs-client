import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import * as Quill from 'quill';
import './style.scss';

const modules = {
	toolbar: {
		container: [
			['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
			[{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
				{ align: [] }
			],
			['link', 'image', 'video'],
			['clean']
		]
		// handlers: { image: this.imageHandler }
	},
	clipboard: { matchVisual: false }
};
const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'size',
	'color',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'align',
	'code-block'
];
export interface UnprivilegedEditor {
	getLength(): number;
	getText(index?: number, length?: number): string;
	getHTML(): string;
	getBounds(index: number, length?: number): Quill.BoundsStatic;
	getSelection(focus?: boolean): Quill.RangeStatic;
	getContents(index?: number, length?: number): Quill.DeltaStatic;
}

interface CustomToolbarProp {
	onClickRaw: () => void;
}

interface RichEditorProps {
	value?: string;
	onChange?: (e: any) => void;
}

const CustomToolbar = ({ onClickRaw }: CustomToolbarProp) => (
	<div id='toolbar'>
		<button className='ql-bold'></button>
		<button className='ql-italic'></button>
		<button onClick={onClickRaw}>Raw</button>
	</div>
);

const RichEditor = ({ value = '', onChange }: RichEditorProps) => {
	const [text, setText] = useState('');
	const handleClickShowRaw = () => {
		// const isEditingRaw = this.state.showRaw;
		// this.setState({showRaw: !isEditingRaw})
		// this.syncViews(isEditingRaw)
	};

	return (
		<>
			{/* <CustomToolbar onClickRaw={handleClickShowRaw} /> */}
			<ReactQuill
				theme='snow'
				modules={modules}
				formats={formats}
				onChange={onChange}
				value={value}
				bounds={'.app'}
				placeholder={'Text (Option)'}></ReactQuill>
		</>
	);
};

export default React.memo(RichEditor);
