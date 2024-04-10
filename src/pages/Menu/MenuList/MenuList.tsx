import ProductCard from '../../../components/ProductCard/ProductCard.tsx';
import {MenuListProps} from './MenuList.props.ts';
import styles from './MenuList.module.css'

export function MenuList({ products }: MenuListProps) {
	return <div className={styles.wrapper} > {products.map(p => (
		<ProductCard
			key={p.id}
			id={p.id}
			name={p.name}
			ingredients={p.ingredients.join(',')}
			image={p.image}
			price={p.price}
			rating={p.rating}/>
	))}
	</div>
}
