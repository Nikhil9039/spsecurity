import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Hero
        cName="hero"
        // heroImg="https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        heroImg="https://plus.unsplash.com/premium_photo-1682377521720-3a43955c8329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=866&q=80"
        title="Your Journey Your Story"
        text="Choose your faborite destination for visit the world"
        buttonText="Travel Plan"
        url="/contact"
        btnClass="show"
        ></Hero>
        <Destination></Destination>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;