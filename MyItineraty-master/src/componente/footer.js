import React from 'react';
import { Link, BrowserRouter as Router} from "react-router-dom";

// import './link.css';
import './body.css';
import homeIcon from '../IMG/homeIcon.png';

class Footer extends React.Component
{
    render() {
      return (
        <Router>
        <Link to="./"><img className="responsiveImg" src={homeIcon} alt="home" /></Link>
        </Router>
      )
    }
}
export default Footer;