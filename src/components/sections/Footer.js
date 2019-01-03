import React from 'react';
import '../pages/home/home.css';

const Footer = () => (
    <div className="nav navbar-light bg-dark text-center text-light fixed-bottom">
    <p className="footer-text m-sm-4">Built with 
        <i className="fas fa-leaf ml-1"></i> Spring Boot REST Service backend & 
        <i className="fab fa-react ml-1"></i> React/Redux client.
         Copyright &copy;{new Date().getFullYear()} Emerson Doyah Projects
    </p>
    </div> 
);

export default Footer;