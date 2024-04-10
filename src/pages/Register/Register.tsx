import Title from '../../components/Title/Title.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import styles from '../Login/Login.module.css'
import {Link, useNavigate} from 'react-router-dom';
import {FormEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store.ts';
import {register, userActions} from '../../store/user.slice.ts';

export type RegisterForm = {
	email: {
		value: string
	}
	password: {
		value: string
	}
	name: {
		value: string
	}
}

export function Register() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const { jwt, registerErrorMessage} = useSelector((s: RootState) => s.user)

	useEffect(() => {
		if (jwt) {
			navigate('/')
		}
	}, [jwt, navigate] )

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		dispatch(userActions.clearRegisterError())
		const target = e.target as typeof e.target & RegisterForm
		const { email, password, name} = target
		dispatch(register({ email: email.value, password: password.value, name: name.value }))

	}

	return <div className={styles.wrapper}>
		<Title className={styles.title}>Регистрация</Title>
		{registerErrorMessage && <div className={styles.error}>{registerErrorMessage}</div>}
		<form className={styles.form} onSubmit={submit}>
			<div className={styles.input_wrapper}>
				<label htmlFor='email' className={styles.label}>Ваш email</label>
				<Input id='email' name='email' placeholder='Email'></Input>
			</div>
			<div className={styles.input_wrapper}>
				<label htmlFor='password' className={styles.label}>Ваш пароль</label>
				<Input id='password' name='password' type='password' placeholder='Пароль'></Input>
			</div>
			<div className={styles.input_wrapper}>
				<label htmlFor='name' className={styles.label}>Ваше имя</label>
				<Input id='name' name='name' placeholder='Имя'></Input>
			</div>

			<Button className={styles.btn} appearance='big'>Зарегистрироваться</Button>
		</form>
		<p className={styles.text}>Есть аккаунт?<br/><Link to='/auth/register' className={styles.text_accent}>Войти</Link></p>
	</div>
}