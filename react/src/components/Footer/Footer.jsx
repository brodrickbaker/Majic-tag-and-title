import "./footer.css";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={logo} className="logo"></img>
      <div> <p>&copy; 2025 Majic Tag and Title. All rights reserved.</p> </div>
    </footer>
  )
};

export default Footer;
