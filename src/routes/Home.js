import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HeroImg from '../assets/pexels-kindel-media-7714864.jpg'
function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero"
        // heroImg="https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        heroImg={HeroImg}
        title="Welcome to Suryaputra Security Services"
        text='"Securing Your World, Every Step of the Way"'
        // buttonText="Enquiry Now"
        url="/contact"
        // btnClass="show"
        ></Hero>
        <Destination></Destination>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;