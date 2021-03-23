import React from 'react';
import { RouteProps } from 'react-router';

export const router: RouteProps[] = [
	{
		path: '/auth',
		exact: true,
		component: React.lazy(() => import('container/auth'))
	},
	{
		path: '',
		exact: false,
		component: React.lazy(() => import('container/Home/Home'))
	}
];
