import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';
import PrivateComponent from './Components/PrivateComponent';
import SignUp from './Components/signup';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='' element={<PrivateComponent />}>
            <Route path='/' element={<ProductList/>} />
            <Route path='/productlist' element={<h2>segs</h2>} />
            <Route path='/addproduct' element={<Addproduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Customer detail</h1>} />
            <Route path='/about' element={<h1>About US</h1>} />
            <Route path='/contact' element={<h1>Contact Us</h1>} />
          </Route>

          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
