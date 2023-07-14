import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// this is the variable we create downside
import AboutImg from "../assets/sunrise-1014712_1280.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Know About Us"
        btnClass="hide"
        ></Hero>
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;