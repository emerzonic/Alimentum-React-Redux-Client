import React from 'react';
import { Component } from 'react';

class  Home extends Component {
    render() { 
        console.log(this.state);
        return (
            <div className="container p-md-5 home-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-dark text-white my-3 text-center home-page-cards" onClick={()=>this.props.history.push("/categories")}>
                            <img className="card-img home-page-img" src="https://4.bp.blogspot.com/-SxNclPpYpEY/VN4a-TkoqsI/AAAAAAAACXk/S1vecED4Zt8/s1600/167623-Delicious%2BPizza%2BFood%2BHD%2BWallpaperz.jpg" alt="Card"/>
                            <div className="card-img-overlay">
                                <h5 className="card-title display-4 text-white mt-4" >Categories</h5>
                                <i className="fas fa-list-alt display-4 text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card bg-dark text-white my-3 text-center home-page-cards" onClick={()=>this.props.history.push("/user/login")}>
                    <img className="card-img home-page-img" src="https://4.bp.blogspot.com/-SxNclPpYpEY/VN4a-TkoqsI/AAAAAAAACXk/S1vecED4Zt8/s1600/167623-Delicious%2BPizza%2BFood%2BHD%2BWallpaperz.jpg" alt="Card"/>
                    <div className="card-img-overlay">
                    <h5 className="card-title display-4 text-white mt-4">Login or Sign up</h5>
                        <i className="fas fa-lock-open display-4 text-white"></i>
                    </div>
                </div>
                
                    </div>
           
                    <div className="col-md-6">
                    <div className="card bg-dark text-white my-3 text-center home-page-cards"onClick={()=>this.props.history.push("/categories")}>
                    <img className="card-img home-page-img" src="https://4.bp.blogspot.com/-SxNclPpYpEY/VN4a-TkoqsI/AAAAAAAACXk/S1vecED4Zt8/s1600/167623-Delicious%2BPizza%2BFood%2BHD%2BWallpaperz.jpg" alt="Card"/>
                    <div className="card-img-overlay">
                    <h5 className="card-title display-4 text-white mt-4">Search Recipes</h5>
                        <i className="fas fa-search display-4 text-white"></i>
                    </div>
                </div>
                
                    </div>
                    <div className="col-md-6">
                    <div className="card bg-dark text-white my-3 text-center home-page-cards" onClick={()=>this.props.history.push("/user/favorites")}>
                    <img className="card-img home-page-img" src="https://4.bp.blogspot.com/-SxNclPpYpEY/VN4a-TkoqsI/AAAAAAAACXk/S1vecED4Zt8/s1600/167623-Delicious%2BPizza%2BFood%2BHD%2BWallpaperz.jpg" alt="Card"/>
                    <div className="card-img-overlay">
                    <h5 className="card-title display-4 text-white mt-4">Favorites</h5>
                        <i className="far fa-star display-4 text-white"></i>
                    </div>
                </div>
                
                    </div>
                </div>
               
            </div>
         );
    }
}
 
export default Home;
