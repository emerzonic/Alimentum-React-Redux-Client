import React from 'react';
import { Component } from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import Exception from "../errors/Exception";
import '../home/home.css';
import Loading from '../../sections/Loading';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';
import "./favorite.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import store from "../../../store";
import { 
    getUserRecipes,
    deleteRecipe, 
    updatePageTitle 
} from "../../../actions/projectActions";

class  Favorites extends Component {

    checkRecipes = () =>{ 
        let favRecipe = store.getState().favoriteRecipes.length;
        let pageTitle = favRecipe === 0 ? 
            "You have not saved any recipe.":"Your Favorites.";
        this.props.updatePageTitle(pageTitle);
    };


    deleteRecipe = (event) =>{ 
        let recipeId = event.target.getAttribute("data-id");
        let {id} = this.props.currentUser.user;
        this.props.deleteRecipe(recipeId, id);
        this.checkRecipes();
    };

componentWillMount(){
    let {id} = this.props.currentUser.user;
    this.props.getUserRecipes(id);
    this.checkRecipes();
}
    render() { 
        return (
            <div>
            <Header  {...this.props}/>
            <PageHeader {...this.props}/>
                <div className="container items-container shadow-sm my-2 rounded bg-white">
                    <div className="row">
                        <div className="col-12">
                        <div className="text-center text-success">{this.props.deleteFeedBack?this.props.deleteFeedBack.text:""}</div>
                        {this.props.errors !== undefined?
                            (this.props.favoriteRecipes.lenghth === 0 ? <Loading/>:
                            <FavoriteRecipes favoriteRecipes={this.props.favoriteRecipes} 
                                             onClick={this.onClick} 
                                             deleteRecipe={this.deleteRecipe} 
                                             history={this.props.history}/>)
                        :<Exception/>} 
                        </div>
                    </div>
                </div>  
            </div>
         );
    }
}
 
Favorites.propTypes = {
    getUserRecipes:PropTypes.func.isRequired,
    deleteRecipe:PropTypes.func.isRequired,
    updatePageTitle:PropTypes.func.isRequired,
    favoriteRecipes:PropTypes.array.isRequired,
    pageTitle:PropTypes.string.isRequired,
    deleteFeedBack:PropTypes.object,
    errors:PropTypes.object,
    currentUser:PropTypes.object.isRequired
    }
  
  const mapStateToProps = state =>({
    favoriteRecipes:state.favoriteRecipes,
    pageTitle:state.pageTitle,
    deleteFeedBack:state.deleteFeedBack,
    errors:state.errors,
    currentUser:state.currentUser
  })


export default connect(mapStateToProps,{getUserRecipes,deleteRecipe, updatePageTitle})(Favorites);