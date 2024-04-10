import {useLoaderData} from 'react-router';
import {Product} from '../../interfaces/product.interface.ts';
import {Await} from 'react-router-dom';
import {Suspense} from 'react';

export function Product() {
	const data = useLoaderData() as { data: Product };

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await
				resolve={data.data}
			>
				{({data}: { data: Product }) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>

	</>
}