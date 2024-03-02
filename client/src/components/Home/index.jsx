import Menu from "../Menu";
import NavBar from "../Navbar";
import Hero from "../Hero";
import OrderCheckout from "../OrderCheckout";
import Contact from "../Contact";
import Feedbacks from "../Feedbacks";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Menu></Menu>
      <OrderCheckout></OrderCheckout>
      <Contact></Contact>
      <Feedbacks></Feedbacks>
      <Footer></Footer>
    </>
  );
};

export default Home;
