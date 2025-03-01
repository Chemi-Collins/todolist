import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
    
    function Navbar() {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      );
    }
    
    export default Navbar;
