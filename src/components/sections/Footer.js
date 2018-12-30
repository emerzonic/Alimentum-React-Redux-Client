import React from 'react';
import '../pages/home/home.css';

const Footer = () => (
    <nav className="nav navbar-light bg-dark text-center fixed-bottom">
        <span className="item text-light p-md-5"><i className="fas fa-leaf text-success"></i><i className="fab fa-react ml-2"></i> Built with Spring Boot REST Service backend & React JS client. </span>
        <span className="item text-light p-md-5"> Copyright &copy;2018 Emerson Doyah Projects</span>
    </nav> 
);

export default Footer;