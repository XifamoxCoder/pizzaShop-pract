import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store.ts';
import {getProfile, userActions} from '../../store/user.slice.ts';
import {useEffect} from 'react';

export function Layout() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profile = useSelector((s: RootState) => s.user.profile)
	const items = useSelector((s: RootState) => s.cart.items)

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	const logout = () => {
		dispatch(userActions.logout())
		navigate('/auth/login')
	}

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/assets/avatar.png" className={styles['avatar']} alt="Аватар" />
					<div className={styles['name']}>{profile?.name}</div>
					<div className={styles['email']}>{profile?.email}</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/assets/menu-icon.svg" alt="Иконка меню" />Меню
					</NavLink>
					<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/assets/cart-icon.svg" alt="Иконка корзины" />Корзина <span className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
					</NavLink>

				</div>
				<Button className={styles['exit']} onClick={logout}>
					<img src="/assets/exit-icon.svg" alt="Иконка выхода" />Выйти
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
