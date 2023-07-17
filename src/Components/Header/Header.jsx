import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<header>
			<h1>Shop Persa</h1>
			
			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nO2YbWhOYRjHf17WGMMwIhTzllpWJG+f5C1fvNdklDIpmYRoeQ1R27xLmryFRpLyhSiaGR/kAy1pD0IUCsNiY6a7/qfu1nPOc56d84wP51+n033u//2/rnPOda7rug9EiBAhQoRWoB8wB9gMlAHHdTbj2Zr/L5AOrACqgWYfxz1gudb9EywAXlgONQE1wDmgBNipsxnXaN7hPgfmtaWzGcBJy4H3wCZgYIJ1g4Bi4IO1thzonGqHuwKV1pMt1bVkkKlY/yOd20CXFPlLmgwYQ9+AGQH1ZgHfpXcL6EgKsF8GjKHxLpy+4sWAL0Ct3kZvF/5EoF66Jv5DxWS9TnPMd+EMB965ZI03wBCXdQvFMdoTwnK4HfBIwqc8eA/EiSlfm5tYDLzW9bsea8+K81D2AmOmFRbZLpw8cerjPNGRwE/N57qs72OFybQwnL4msX0enKXWBxUPlZpf4qFxSJwrYeTkHxIzTzOR024hcF/zBR4aY6y31SmI09MlZOLSC8PE+wWMbTE3DvitDy0ngc5b6UwJ4vQaiVz2wb0k7mdgg254o1JfM3DRh8ZVcVcFcfqAREwFS4QeHo1Tteb92jO5vdU4JpGtSVTNQuAG8Bi4rnGaz/XbZe9IAJ85KpE9tA1KZO9wEJFiiZjknwij1Fub1FihGK9QaBVqPhHOy575FloNp8SafjgeegJb1B/72QTUaieT5aL3VLxAvXa2WlCTrgZb101Hth74ajlk0l0VcBrYDawDdmlcCTRY3DpgLdDB0syRHZMeexEQTmHYZnVyToUzxzNgJdDdRx+9DHhirb2jEm6wQ9fMjQdGgcQ+qXeIWZWrqMXT8oP2iv06K2Ryld/NeFEYTqdZe8EGq0KODqg7Qg7burEk0qPvct6sPd7QkHQHAK+sfjqUDs9GudWiTgpJM09hZ3RPkAKkq4tzHDeNfhBMteK4Kmhn54Us/XBxQuUC0D9JjW4qOE1WX2LyfUqRodzrOG5y9V7tULyQo7T20Vp7RnpthrnW1+8cL9XGlukPU6nKeW2cyhg0vFoNk57ygZtAY4IS3ihefphpLSgylbKKFC4HdV6t62Y+QoQIESKQFP4CmvQeVGouHw0AAAAASUVORK5CYII="/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
											
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
