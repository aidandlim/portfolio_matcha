import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { auth_landingStatus } from '../../../actions';

import axios from 'axios';

import alert from '../alert';

const Signup = () => {
	const [step, setStep] = useState(0);
	const dispatch = useDispatch();
	
	const _handleForm = (e) => {
		console.log('Signup > _handleForm');
		e.preventDefault();

		const data = {
			email: document.signup.email.value,
			password: document.signup.password.value,
			first_name: document.signup.firstName.value,
			last_name: document.signup.lastName.value,
			birth_year: parseInt(document.signup.birthYear.value),
			gender: parseInt(document.signup.gender.value),
			preference: parseInt(document.signup.preference.value),
			bio: document.signup.bio.value
		};

		axios.post('/users/signup', data)
		.then(res => {
			if(res.data) {
				console.log('signup success');
				dispatch(auth_landingStatus(0));
			} else {
				alert(0, 'email is duplicated', 'Okay', null, null);
			}
		});
	}

	const _handleCheckValidation = () => {
		let error = 0;

		if(step === 0) {
			let email = document.signup.email;
			let password = document.signup.password;
			let confirm = document.signup.confirm;

			email.style.borderBottom = 'solid 0.05rem var(--color-20)';
			password.style.borderBottom = 'solid 0.05rem var(--color-20)';
			confirm.style.borderBottom = 'solid 0.05rem var(--color-20)';

			if(email.value === '') {
				email.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
			if(password.value === '') {
				password.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
			if(confirm.value === '') {
				confirm.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
			if(_handlePasswordCheck() !== 0) {
				password.style.borderBottom = 'solid 0.05rem var(--color-90)';
				confirm.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
		} else if(step === 1) {
			let firstName = document.signup.firstName;
			let lastName = document.signup.lastName;

			firstName.style.borderBottom = 'solid 0.05rem var(--color-20)';
			lastName.style.borderBottom = 'solid 0.05rem var(--color-20)';

			if(firstName.value === '') {
				firstName.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
			if(lastName.value === '') {
				lastName.style.borderBottom = 'solid 0.05rem var(--color-90)';
				error++;
			}
		}

		if(error === 0) {
			setStep(step + 1);
		}
	}

	const _handlePasswordCheck = () => {
		const password = document.signup.password.value;
		const confirm = document.signup.confirm.value;

		const pattern1 = /[0-9]/;
        const pattern2 = /[a-zA-Z]/;
		const pattern3 = /[~!@#$%<>^&*]/;

		let error = 0;
		
		if(!(8 <= password.length && password.length <= 20)) {
			error++;
		}

		if(!pattern1.test(password) || !pattern2.test(password) || !pattern3.test(password)) {
			error++;
		}

		if(password === '' || password !== confirm) {
			error++;
		}

		return error;
	}

	return (
		<form name='signup' onSubmit={_handleForm}>
			<div className='signin-title'>Sign up right now!</div>
			<div className='signin-description'>What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?</div>
			{ /* Step 0 */ }
			<label className={ step === 0 ? 'signin-label' : 'signin-label unactive' }>
				<span>Email</span>
				<input className='signin-input' type='email' name='email' />
			</label>
			<label className={ step === 0 ? 'signin-label' : 'signin-label unactive' }>
				<span>Password</span>
				<input className='signin-input' type='password' name='password' />
			</label>
			<label className={ step === 0 ? 'signin-label' : 'signin-label unactive' }>
				<span>Confirm Password</span>
				<input className='signin-input' type='password' name='confirm' />
			</label>
			{ /* Step 1 */ }
			<label className={ step === 1 ? 'signin-label' : 'signin-label unactive' }>
				<span>First Name</span>
				<input className='signin-input' type='text' name='firstName' />
			</label>
			<label className={ step === 1 ? 'signin-label' : 'signin-label unactive' }>
				<span>Last Name</span>
				<input className='signin-input' type='text' name='lastName' />
			</label>
			<label className={ step === 1 ? 'signin-label' : 'signin-label unactive' }>
				<span>Birth Year</span>
				<select className='signin-input' name='birthYear'>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
					<option value='2017'>2017</option>
					<option value='2016'>2016</option>
					<option value='2015'>2015</option>
					<option value='2014'>2014</option>
					<option value='2013'>2013</option>
					<option value='2012'>2012</option>
					<option value='2011'>2011</option>
					<option value='2010'>2010</option>
					<option value='2009'>2009</option>
					<option value='2008'>2008</option>
					<option value='2007'>2007</option>
					<option value='2006'>2006</option>
					<option value='2005'>2005</option>
					<option value='2004'>2004</option>
					<option value='2003'>2003</option>
					<option value='2002'>2002</option>
					<option value='2001'>2001</option>
					<option value='2000'>2000</option>
					<option value='1999'>1999</option>
					<option value='1998'>1998</option>
					<option value='1997'>1997</option>
					<option value='1996'>1996</option>
					<option value='1995'>1995</option>
					<option value='1994'>1994</option>
					<option value='1993'>1993</option>
					<option value='1992'>1992</option>
					<option value='1991'>1991</option>
					<option value='1990'>1990</option>
					<option value='1989'>1989</option>
					<option value='1988'>1988</option>
					<option value='1987'>1987</option>
					<option value='1986'>1986</option>
					<option value='1985'>1985</option>
					<option value='1984'>1984</option>
					<option value='1983'>1983</option>
					<option value='1982'>1982</option>
					<option value='1981'>1981</option>
					<option value='1980'>1980</option>
					<option value='1979'>1979</option>
					<option value='1978'>1978</option>
					<option value='1977'>1977</option>
					<option value='1976'>1976</option>
					<option value='1975'>1975</option>
					<option value='1974'>1974</option>
					<option value='1973'>1973</option>
					<option value='1972'>1972</option>
					<option value='1971'>1971</option>
					<option value='1970'>1970</option>
					<option value='1969'>1969</option>
					<option value='1968'>1968</option>
					<option value='1967'>1967</option>
					<option value='1966'>1966</option>
					<option value='1965'>1965</option>
					<option value='1964'>1964</option>
					<option value='1963'>1963</option>
					<option value='1962'>1962</option>
					<option value='1961'>1961</option>
					<option value='1960'>1960</option>
					<option value='1959'>1959</option>
					<option value='1958'>1958</option>
					<option value='1957'>1957</option>
					<option value='1956'>1956</option>
					<option value='1955'>1955</option>
					<option value='1954'>1954</option>
					<option value='1953'>1953</option>
					<option value='1952'>1952</option>
					<option value='1951'>1951</option>
					<option value='1950'>1950</option>
					<option value='1949'>1949</option>
					<option value='1948'>1948</option>
					<option value='1947'>1947</option>
					<option value='1946'>1946</option>
					<option value='1945'>1945</option>
					<option value='1944'>1944</option>
					<option value='1943'>1943</option>
					<option value='1942'>1942</option>
					<option value='1941'>1941</option>
					<option value='1940'>1940</option>
					<option value='1939'>1939</option>
					<option value='1938'>1938</option>
					<option value='1937'>1937</option>
					<option value='1936'>1936</option>
					<option value='1935'>1935</option>
					<option value='1934'>1934</option>
					<option value='1933'>1933</option>
					<option value='1932'>1932</option>
					<option value='1931'>1931</option>
					<option value='1930'>1930</option>
					<option value='1929'>1929</option>
					<option value='1928'>1928</option>
					<option value='1927'>1927</option>
					<option value='1926'>1926</option>
					<option value='1925'>1925</option>
					<option value='1924'>1924</option>
					<option value='1923'>1923</option>
					<option value='1922'>1922</option>
					<option value='1921'>1921</option>
					<option value='1920'>1920</option>
					<option value='1919'>1919</option>
					<option value='1918'>1918</option>
					<option value='1917'>1917</option>
					<option value='1916'>1916</option>
					<option value='1915'>1915</option>
					<option value='1914'>1914</option>
					<option value='1913'>1913</option>
					<option value='1912'>1912</option>
					<option value='1911'>1911</option>
					<option value='1910'>1910</option>
					<option value='1909'>1909</option>
					<option value='1908'>1908</option>
					<option value='1907'>1907</option>
					<option value='1906'>1906</option>
					<option value='1905'>1905</option>
					<option value='1904'>1904</option>
					<option value='1903'>1903</option>
					<option value='1902'>1902</option>
					<option value='1901'>1901</option>
				</select>
			</label>
			{ /* Step 2 */ }
			<label className={ step === 2 ? 'signin-label' : 'signin-label unactive' }>
				<span>Gender</span>
				<select className='signin-input' name='gender'>
					<option value='0'>Male</option>
					<option value='1'>Female</option>
				</select>
			</label>
			<label className={ step === 2 ? 'signin-label' : 'signin-label unactive' }>
				<span>Preference</span>
				<select className='signin-input' name='preference'>
					<option value='0'>Male</option>
					<option value='1'>Female</option>
				</select>
			</label>
			<label className={ step === 2 ? 'signin-label' : 'signin-label unactive' }>
				<span>Bio</span>
				<textarea className='signin-textarea' name='bio'></textarea>
			</label>
			<input className={ step !== 2 ? 'signin-submit' : 'signin-submit unactive' } type='button' value='NEXT' onClick={ () => _handleCheckValidation() } />
			<input className={ step === 2 ? 'signin-submit' : 'signin-submit unactive' } type='submit' value='SUBMIT' />
			<input className='signin-button' type='button' value='BACK' onClick={ () => dispatch(auth_landingStatus(1)) } />
		</form>
	);
}

export default Signup;
