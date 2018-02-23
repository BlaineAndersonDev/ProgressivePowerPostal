import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

class Navigation extends Component {

  render() {

    return (
      <div className="Nav-dropdown">
        <MediaQuery maxWidth={799}>
            <div className="Nav-dropdown-container">
            <div className="Nav-dropdown-logo">
              <Link to="/" className="Nav-dropdown-logo-link">
                <h1 className="Nav-dropdown-logo-1">Power Postal</h1>
                <h3 className="Nav-dropdown-logo-2">at Las Sendas</h3>
              </Link>
            </div>
            <div className="Nav-dropdown-menu-container">
              <div className="Nav-dropdown-display">
                <button className="Nav-dropdown-button">
                  <p id="bar-1" className="Nav-menu-bar"></p>
                  <p id="bar-2" className="Nav-menu-bar"></p>
                  <p id="bar-3" className="Nav-menu-bar"></p>
                </button>
                <div className="Nav-dropdown-content">
                  <Link to="/services"><p>Our Services</p></Link>
                  <Link to="/tracking"><p>Track Package</p></Link>
                  <Link to="/contact"><p>Contact Us</p></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="Nav-dropdown-backdrop"></div>
         </MediaQuery>

         <MediaQuery minWidth={800} maxWidth={1200}>
           <div className="Nav-full-container">
             <div className="Nav-full-logo-container">
               <Link to="/" className="Nav-full-logo-link">
                 <h1 className="Nav-full-logo-1">Power Postal</h1>
                 <h3 className="Nav-full-logo-2">at Las Sendas</h3>
               </Link>
             </div>
             <div className="Nav-full-flex-spacer">
             </div>
             <div className="Nav-full-menu">
               <div id="Nav-full-services">
                 <Link className="Nav-full-button" to="/services"><p>Our Services</p></Link>
               </div>
               <div id="Nav-full-tracking">
                 <Link className="Nav-full-button" to="/tracking"><p>Track Package</p></Link>
               </div>
               <div id="Nav-full-contact">
                 <Link className="Nav-full-button" to="/contact"><p>Contact Us</p></Link>
               </div>
               </div>
               <div className="Nav-full-backdrop">
             </div>
           </div>
         </MediaQuery>
        </div>
    );
  }
}

export default Navigation;
