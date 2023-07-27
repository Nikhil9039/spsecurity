import "./Footer.css";
const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Suryaputra</h1>
                    <p>Security Services Private Limited</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Contact Details</h4>
                    <p>Gf 08, Block-B, Mansarovar Complex, Bhopal, India</p>
                    <p>Email: info@suryaputra.in</p>
                    <p>Phone: +91 8962869337</p>

                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Career</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>

            </div>
            <div className="copyright" ><p>Copyright ©2023 Developed By <a href="https://github.com/Nikhil9039"><b>Nikhil</b></a></p></div>
        </div>
    )
}
export default Footer;