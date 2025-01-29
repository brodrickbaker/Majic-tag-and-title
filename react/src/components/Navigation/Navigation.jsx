import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navigation.css';

function Navigation(){

  return (
    <>
        <ul className="nav">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/forms">Forms</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/online-services">Online Services</NavLink>
            </li>
        </ul>
    </>
  );
}

export default Navigation;
