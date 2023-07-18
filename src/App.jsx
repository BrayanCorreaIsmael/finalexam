import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { ProductList } from './Components/Main/ProductList';
import {NavLink, Route, Routes, Router} from 'react-router-dom'
import Form from './Components/Form/Form';
import DetailPage  from './Components/DetailPage/DetailPage'



function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			 <Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      <Routes>
        <Route path='/' element={<ProductList/>}/> 
        <Route path='/form' element={<Form/>}/>
        <Route path='/form/:id' element={<DetailPage/>}/> 
      </Routes>
			{/* <Footer></Footer>  */}
			{/* <Form></Form>  */}

		</>
	);
}

export default App;
