import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer  , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./global.css"
import Cart from './Cart'
import Product from './Product'
import Update from './Update';
const App = () => {
  return (
    <div>
      <ToastContainer/>
       <Router>
          <Nav/>
          <Routes>
              <Route path='/' element={<Cart/>} />
              <Route path="/product" element={<Product/>}/>
              <Route path='/update/:id' element={<Update/>}/>
          </Routes>
       </Router>
    </div>
  )
}

export default App
