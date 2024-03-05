import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import Supersellers from "./components/Supersellers";

function App() {
 
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/Supersellers" element={<Supersellers />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
