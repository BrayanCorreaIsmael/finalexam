import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { ProductList } from './Components/Main/ProductList';
import Footer from './Components/Footer/Footer'
import Form from './components/Form/Form';


function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			{ <Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/> }
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			{/* <Footer></Footer> 
			<Form></Form> */}
		</>
	);
}

export default App;
