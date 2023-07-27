import "./Navbar.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import img1 from "../assets/SURYAPUTRA2.png";


// function Navbar(){

// }

// export default Navbar
//shortcut for closing side bar: ctrl+b
//writing key =index that means our list tag knows that we are targetting the index
class Navbar extends Component {
  state={clicked: false}
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        {/* <h1 className="navbar-logo">SURYAPUTRA</h1> */}
        {/* <img className="navbar-logo" src={img1} alt="Logo" /> */}
        <div className="logo">
          <Link to='/'> <img src={img1} alt="This is the logo"/>
</Link>
        </div>
    
        {/* <p>SECURITY SERVICES PRIVATE LIMITED</p> */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times ":"fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
          {/* <button>Sign Up</button> */}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
