import Title from '../../components/Title/Title.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import CartItem from '../../components/CartItem/CartItem.tsx';
import {useEffect, useState} from 'react';
import {Product} from '../../interfaces/product.interface.ts';
import axios from 'axios';
import {PREFIX} from '../../helpers/API.ts';

export function Cart() {
	const [cartProducts, setCartProducts] = useState<Product[]>([])
	const items = useSelector((s: RootState) => s.cart.items)

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`)
		return data
	}

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)))
		setCartProducts(res)
	}

	useEffect(() => {
		loadAllItems()
	}, [items])

	return <>
		<Title>Корзина</Title>
		{items.map(i => {
			const product = cartProducts.find(p => p.id === p.id)
			if (!product) {
				return
			}
			return <CartItem count={i.count} {...product} />
		})}
	</>
}