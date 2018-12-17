import React from 'react';
import { Component } from 'react';
import Img from "../../../assets"
import assets from '../../../assets';
import util from '../../util';



let img = {
    backgroundImage: 'url(' + Img.category.cat3.image + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  };
class  Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards:[],
        }
    this.state.cards = util.getDataArray(assets.homeCardsObj); 
    } 

    render() { 
        return (
            <div className="home-div bg-dark" style={img}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="home-title">ALIMENTUM</h1>
                        <h4 className="home-text">Where Food is Life</h4>
                    </div>
                </div>
                <div className="row px-md-5 px-sm-2">
                    {this.state.cards.map((card,i)=>
                        <div className="col-md-3" key={i}>
                            <div className="card bg-dark text-white my-3 text-center home-page-cards border-0" 
                                 onClick={()=>this.props.history.push(card.url)}>
                                <img className="card-img home-page-img" src={card.image} alt="Card"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-white mt-4 page-links" >{card.text}</h5>
                                    <i className={card.icon}></i>
                                </div>
                            </div>                            
                        </div>                            
                    )}
                </div>
                <div className="pusher">
                </div>
        </div>
         );
    }
}
 
export default Home;
