import React from 'react';
import { RouteProps } from 'react-router';

export const router: RouteProps[] = [
	{
		path: '',
		exact: true,
		component: React.lazy(() => import('container/Home/Home'))
	}
];
