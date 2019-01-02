import React from 'react';
import { Component } from 'react';
import Img from "../../../assets"
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getMenus } from "../../../actions/appUtilActions";



let img = {
    backgroundImage: 'url(' + Img.category.cat3.image + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  };
class  Home extends Component {

    componentDidMount(){
        this.props.getMenus();
      }
    render() { 
        return (
            <div className="home-div">
                <div className="row">
                    <div className="col-12">
                        <h1 className="home-title">ALIMENTUM</h1>
                        <h4 className="home-text mb-sm-3">For the good of good food.</h4>
                    </div>
                </div>
                <div className="row px-md-5 px-sm-2">
                    {this.props.menus.map((card,i)=>
                        <div className="col-xl-3 col-lg-3 col-md-3" key={i}>
                            <div className="card bg-dark text-white my-md-3 text-center home-page-cards border-0 shadow-lg" 
                                 onClick={()=>this.props.history.push(card.url)}>
                                <img className="card-img home-page-img" src={card.image} alt="Card"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-white mt-4 page-links" >{card.text}</h5>
                                    <i className={card.icon}></i>
                                </div>
                            </div> 
                            <h5 className="menu-title shadow-lg" >{card.text}</h5>                           
                        </div>                            
                    )}
                </div>
                 
        </div>
         );
    }
}
 
Home.propTypes = {
    getMenus:PropTypes.func.isRequired,
    menus:PropTypes.array.isRequired,
    }
  
  const mapStateToProps = state =>({
      menus:state.appUtil.menus,
  })
export default connect(mapStateToProps,{getMenus})(Home);
