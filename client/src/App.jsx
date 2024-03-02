import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Supersellers from './components/Supersellers';
import Menu from './components/Menu';
import Order from './components/Order';
import Checkout from './components/Checkout';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (pizza) => {
    setOrderItems([...orderItems, { ...pizza, qty: 1 }]);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedOrderItems = [...orderItems];
    updatedOrderItems[index].qty = newQuantity;
    setOrderItems(updatedOrderItems);
  };
  
  return (
    <>
      <Navbar />
      <Hero />
      <Supersellers />
      <Menu onAddToOrder={addToOrder} />
      <div className='d-flex flex-column flex-lg-row gap-3'>
        <Order orderItems={orderItems} onUpdateQuantity={updateQuantity} />
        <Checkout />
      </div>
      <Feedbacks />
      <Contact />
      <Footer />
    </>
  )
}

export default App
