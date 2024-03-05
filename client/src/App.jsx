import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
  // const [orderItems, setOrderItems] = useState([]);

  // // Function to add a pizza to the order
  // const addToOrder = (pizza) => {
  //   setOrderItems([...orderItems, { ...pizza, qty: 1 }]);
  // };

  // // Function to update the quantity of a pizza in the order
  // const updateQuantity = (index, newQuantity) => {
  //   const updatedOrderItems = [...orderItems];
  //   updatedOrderItems[index].qty = newQuantity;
  //   setOrderItems(updatedOrderItems);
  // };

  // // Function to calculate order subtotal
  // const calculateSubtotal = () => {
  //   let subtotal = 0;
  //   orderItems.forEach(pizza => {
  //     subtotal += parseFloat(pizza[pizza.selectedPrice]) * pizza.qty;
  //   });
  //   return subtotal.toFixed(2);
  // };

  // // Function to calculate the order subtotal and delivery fee
  // const calculateTotal = () => {
  //   let subtotal = 0;
  //   orderItems.forEach(pizza => {
  //     subtotal += parseFloat(pizza[pizza.selectedPrice]) * pizza.qty;
  //   });
  //   const deliveryFee = 2.5; // Defina sua taxa de entrega aqui
  //   const total = subtotal + deliveryFee;
  //   return { subtotal: subtotal.toFixed(2), total: total.toFixed(2) };
  // };
  
  return (
    <>
      {/* <Navbar />
      <Hero />
      <Supersellers />
      <Menu onAddToOrder={addToOrder} />
      <div className='d-flex flex-column flex-lg-row gap-3'>
        <Order orderItems={orderItems} onUpdateQuantity={updateQuantity} />
        <Checkout subtotal={calculateTotal().subtotal} total={calculateTotal().total} />
      </div>
      <Feedbacks />
      <Contact />
      <Footer />
      <CreditCard /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
