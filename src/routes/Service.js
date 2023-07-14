import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from '../assets/beach.jpg'
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        btnClass="hide"
        ></Hero>
        <Trip/>
        <Footer/>

        </>
    )
}

export default Service;