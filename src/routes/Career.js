import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from '../assets/business-2879489_1280.jpg'
import Footer from "../components/Footer";
import CareerForm from "../components/CareerForm";

function Contact(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Join Us"
        btnClass="hide"
        ></Hero>
        <CareerForm/>
        <Footer/>

        </>
    )
}

export default Contact;