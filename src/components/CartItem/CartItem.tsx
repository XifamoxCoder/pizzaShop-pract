import styles from './CartItem.module.css'
import {CartItemProps} from './CartItem.props.ts';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store.ts';
import {cartActions} from '../../store/cart.slice.ts';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>()

	const increase = () => {
		dispatch(cartActions.add(props.id))
	}
	const decrease = () => {
		dispatch(cartActions.remove(props.id))
	}
	const remove = () => {
		dispatch(cartActions.delete(props.id))
	}
	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img src="/assets/minus.svg" alt="Удалить"/>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/assets/plus.svg" alt="Добавить"/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/assets/delete.svg" alt="Удалить все"/>
				</button>
			</div>
		</div>
	)
}

export default CartItem