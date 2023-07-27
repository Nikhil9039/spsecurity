import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from '../assets/business-2879489_1280.jpg'
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        // heroImg={ServiceImg}
        heroImg="https://media.istockphoto.com/id/513438345/photo/portrait-of-confident-construction-worker-and-crowd.jpg?s=1024x1024&w=is&k=20&c=xE-FWXX5sAtJ3nSr9ZjED98MM4ucgSpvR1S3IstNUYQ="
        title="Services"
        btnClass="hide"
        ></Hero>
        <Trip/>
        <Footer/>

        </>
    )
}

export default Service;