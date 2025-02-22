import { Link } from "react-router-dom";
import Logo from "../assets/logo-01.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavStyle from "./Navbar.module.css";


function Navbar() {
  
  return (
    <>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link className={NavStyle.navLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={NavStyle.navLink} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={NavStyle.navLink} to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link className={NavStyle.navLink} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={NavStyle.navLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={NavStyle.navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className={NavStyle.icons}>
          <i class="fa-solid fa-magnifying-glass fa-xl"></i>
          <i class="fa-solid fa-cart-shopping fa-xl"></i>
          <i class="fa-regular fa-heart fa-xl"></i>
        </div>
        
      </nav>
      <div className={NavStyle.space}></div>
    </>
  );
}

export default Navbar;
