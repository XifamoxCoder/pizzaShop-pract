import Title from '../../components/Title/Title.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import styles from './Login.module.css'
import {Link, useNavigate} from 'react-router-dom';
import {FormEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store.ts';
import {login, userActions} from '../../store/user.slice.ts';

export type LoginForm = {
	email: {
		value: string
	}
	password: {
		value: string
	}
}

export function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const { jwt, loginErrorMessage} = useSelector((s: RootState) => s.user)

	useEffect(() => {
		if (jwt) {
			navigate('/')
		}
	}, [jwt, navigate] )

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		dispatch(userActions.clearLoginError())
		const target = e.target as typeof e.target & LoginForm
		const { email, password} = target
		await sendLogin(email.value, password.value)
	}

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({ email, password }))
	}


	return <div className={styles.wrapper}>
		<Title className={styles.title}>Вход</Title>
		{loginErrorMessage && <div className={styles.error}>{loginErrorMessage}</div>}
		<form className={styles.form} onSubmit={submit}>
			<div className={styles.input_wrapper}>
				<label htmlFor='email' className={styles.label}>Ваш email</label>
				<Input id='email' name='email' placeholder='Email'></Input>
			</div>
			<div className={styles.input_wrapper}>
				<label htmlFor='password' className={styles.label}>Ваш пароль</label>
				<Input id='password' name='password' type='password' placeholder='Пароль'></Input>
			</div>

			<Button className={styles.btn} appearance='big'>Вход</Button>
		</form>
		<p className={styles.text}>Нет аккаунта?<br/><Link to='/auth/register' className={styles.text_accent}>Зарегистрироваться</Link></p>
	</div>
}