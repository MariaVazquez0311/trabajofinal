import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import right from '../IMG/circled-right-2.png';
// import './link.css';
import './body.css';


 export default class Flecha extends React.Component {
    render() {
        return (
            <div className="body">
            <Router>
                <Link to="./Cities"><img className="responsiveImg" src={right} alt="Cities" /></Link>
            </Router>
                {/* <h4>Want to build your own MYtinerary?</h4>
                <ul>
                        <li><Link className="link" to="./login">Log In </Link></li>
                        <li><Link className="link" to="./signup">Create Account</Link></li>
                </ul> */}
            </div>
        )
    }
};

