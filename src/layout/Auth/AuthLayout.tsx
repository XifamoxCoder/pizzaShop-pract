import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export function AuthLayout() {

	return (
		<div className={styles['layout']}>
			<div className={styles['logo']}>
				<img src="/assets/logo.svg" alt="Лого"/>

			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
