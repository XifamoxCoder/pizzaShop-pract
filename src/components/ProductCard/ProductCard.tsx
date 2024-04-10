import styles from './ProductCard.module.css'
import {ProductCardProps} from './ProductCard.props.ts';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react'
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store.ts';
import {cartActions} from '../../store/cart.slice.ts';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispatch>()

	const add = (e: MouseEvent) => {
		e.preventDefault()
		dispatch(cartActions.add(props.id))
	}
	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-card']} onClick={add}>
						<img src="/assets/card-button.png" alt="Кнопка корзины"/>
					</button>
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src="/assets/star-icon.svg" alt="Иконка звезды"/>
					</div>

				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.name}</div>
					<div className={styles['description']}>{props.ingredients}</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard