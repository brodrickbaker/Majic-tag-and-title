import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navigation.css';

function Navigation(){

  return (
    <>
        <ul className="nav">
            <li>
                <NavLink to="/"><img src={logo}></img></NavLink>
            </li>
            <li>
                <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/">Online Services</NavLink>
            </li>
            <li>
                <NavLink to="/">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/">Forms</NavLink>
            </li>
        </ul>
    </>
  );
}

export default Navigation;
