import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import './style.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EMAIL_PATTERN } from 'assets/const';

type FormLoginValues = {
	password: string;
	email: string;
};

type FormSignInValues = {
	passwordR: string;
	emailR: string;
	name: string;
};

const Auth = () => {
	const [panelActive, setPanelActive] = useState<number>(0); //0 is login

	const changePanelActive = useCallback(
		(value: number): void => {
			setPanelActive(value);
		},
		[panelActive]
	);

	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmitLogin = handleSubmit(({ password, email }: FormLoginValues) => {
		console.log(email, password);
	}); //

	const onSubmitRegister = handleSubmit(
		({ passwordR, emailR, name }: FormSignInValues) => {
			console.log(emailR, passwordR, name);
		}
	); //
	return (
		<>
			<div
				className={clsx('container', panelActive && 'right-panel-active')}
				id='container'>
				<div className='form-container sign-up-container'>
					<form onSubmit={onSubmitRegister}>
						<h1>Create Account</h1>
						<span>or use your email for registration</span>
						<input
							type='text'
							placeholder='Name'
							name='name'
							ref={register({ required: true })}
						/>
						<input
							type='email'
							placeholder='Email'
							name='emailR'
							ref={register({ required: true, pattern: EMAIL_PATTERN })}
						/>{' '}
						<span className='text-left py-5 w-full text-red-500 text-sm'>
							{errors.email?.type === 'required' && 'Ô này không được để trống'}
							{errors.email?.type === 'pattern' && 'Email không hợp lệ'}
						</span>
						<input
							type='password'
							placeholder='Password'
							name='passwordR'
							ref={register({ required: true })}
						/>{' '}
						<span className='text-left py-5 w-full text-red-500 text-sm'>
							{errors.password?.type === 'required' &&
								'Ô này không được để trống'}
						</span>
						<button type='submit'>Sign Up</button>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form onSubmit={onSubmitLogin}>
						<div className='text-5xl mb-2'>Sign in</div>

						<span>or use your account</span>

						<input
							type='text'
							placeholder='Email'
							name='email'
							id='email'
							ref={register({ required: true, pattern: EMAIL_PATTERN })}
						/>
						<span className='text-left py-5 w-full text-red-500 text-sm'>
							{errors.email?.type === 'required' && 'Ô này không được để trống'}
							{errors.email?.type === 'pattern' && 'Email không hợp lệ'}
						</span>
						<input
							type='password'
							placeholder='Password'
							name='password'
							ref={register({ required: true })}
						/>
						<span className='text-left py-5 w-full text-red-500 text-sm'>
							{errors.password?.type === 'required' &&
								'Ô này không được để trống'}
						</span>
						<a href='#'>Forgot your password?</a>
						<button type='submit'>Sign In</button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='overlay-panel overlay-left'>
							<h1>Welcome Back!</h1>
							<p>
								To keep connected with us please login with your personal info
							</p>
							<button className='ghost' onClick={() => changePanelActive(0)}>
								Sign In
							</button>
						</div>
						<div className='overlay-panel overlay-right'>
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className='ghost' onClick={() => changePanelActive(1)}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
