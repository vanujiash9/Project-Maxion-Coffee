import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Service from"./component/Service";
import About from "./component/Navbar/About";
import Banner from "./component/Banner";
import AppStore from "./component/AppStore";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";
const App = () => {
  useEffect(() => {  
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100
    });
  }, []); 

  return <div className='overflow-x-hidden'>
    <Navbar/>
    <Home/>
    <Service/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
    <About/>
    </div>;
};

export default App;
