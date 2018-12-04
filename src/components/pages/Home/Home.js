import React from 'react';
import { Component } from 'react';
import Nav from "./Nav";
import Segment from "./Segment";
import Footer from "./Footer";
import './home.css';


class  Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <div>
                <Nav/>
                    <div className="container-fluid p-0">
                        <Segment/>
                    </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;
