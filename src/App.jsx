import './App.css'
import './assets/css/style.css';
import { Route, Routes } from 'react-router-dom';
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
// import './assets/js/main';



import { Home, About, Contact, MEP, Food, Textile, Cosmetic } from './pages';
import { Navbar, Footer } from './components';


function App() {

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Product" element={<Product />} /> */}
          {/* <Route path="/Product_details" element={<Product_details />} /> */}
          <Route path="/About" element={<About />} />
          {/* <Route path="/Cart" element={<Cart />} /> */}
          {/* <Route path="/Checkout" element={<Checkout />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MEP" element={<MEP />} />
          <Route path="/Textile" element={<Textile />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Cosmetic" element={<Cosmetic />} />
        </Routes>
      <Footer/>
      </div>
        
    </>
  )
}

export default App
