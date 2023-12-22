import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ShowProducts />} />
          <Route exact path='/add' element={<AddProduct />} />
          <Route exact path='/:id/' element={<ProductDetail />} />
          <Route exact path='/:id/update' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
