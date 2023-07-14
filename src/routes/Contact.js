import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from '../assets/cons.jpg'
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact Us"
        btnClass="hide"
        ></Hero>
        <ContactForm/>
        <Footer/>

        </>
    )
}

export default Contact;