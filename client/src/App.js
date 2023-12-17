import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ShowProducts />} />
          <Route exact path='/add' element={<AddProduct />} />
          {/* <Route exact path='/' Component={ShowProducts} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
