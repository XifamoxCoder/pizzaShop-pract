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
		dispatch(cartActions.add(props.id))
	}
	const remove = () => {
		dispatch(cartActions.add(props.id))
	}
	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={decrease}>
					<img src="/assets/card-button.png" alt="Удалить"/>
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img src="/assets/card-button.png" alt="Добавить"/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/assets/card-button.png" alt="Удалить все"/>
				</button>
			</div>
		</div>
	)
}

export default CartItem