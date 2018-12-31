import {getRecipeById, saveRecipe, setModalContent } from "../../../actions/recipeActions";
import { updatePageTitle} from "../../../actions/appUtilActions";
import { setRedirectMessage } from "../../../actions/alertsActions";
import {SET_SAVE_RECIPE_MESSAGE} from "../../../actions/types"
import PageHeader from '../../sections/Page Header';
import Header from '../../sections/Header';
import Modal from '../../sections/Modal';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import store from "../../../store";
import Img from '../../../assets';
import  {Component} from 'react';
import React from 'react';
import '../home/home.css';
import "./detail.css";
import Alert from "./Alert";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

let img = {
    backgroundImage: 'url(' +Img.youtube.img + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"6rem"
  };
class Recipe extends Component {

    saveRecipe = () => { 
        if(!this.props.currentUser.validToken){
            this.props.setRedirectMessage(true, "save recipes");
            this.props.history.push("/user-form/login")
        } else{
            let recipe = this.props.recipe;
            const {id} = this.props.currentUser.user;
            console.log(recipe)
            this.props.saveRecipe(recipe, id)
        }
    };

    setModalContent = (e) => { 
        const setContent = e.target.getAttribute("data-modal")
        if(setContent === "true"){
            this.props.setModalContent(true);
        }else{
            this.props.setModalContent(false);
        }
    };

    componentWillUnmount(){
        store.dispatch({
            type:SET_SAVE_RECIPE_MESSAGE,
            payload:{}
        })    
    }

    componentDidMount(){
        let recipeId = this.props.match.params.recipeId;
        let recipe = this.props.match.params.recipe;
        this.props.getRecipeById(recipeId);
        this.props.updatePageTitle(recipe);
    }

  render() {
      return <div>
                <Header {...this.props}/>
                <PageHeader {...this.props}/>
                <div className="container px-0 my-2 items-container" >
                 <div className="card mb-3 recipe-detail-div border-0 shadow-sm p-md-4">
                <div className="row">
                      <div className="col-md-12">
                          <img className="card-img-top img-fluid rounded" 
                               src={this.props.recipe.strMealThumb} alt={this.props.name}/>
                      </div>
                    <div className="col-md-12">
                        <div className="button-div flex-column flex-md-row shadow-sm">
                            <button className="btn btn-lg btn-danger" data-toggle="modal" data-target="#exampleModal" 
                            data-modal="true" onClick={this.setModalContent}>
                                <i className="fab fa-youtube mr-2"></i>
                                Watch Video
                            </button>
                            <button className="btn btn-lg btn-outline-success" onClick={this.saveRecipe}>
                                <i className="fas fa-plus mr-2"></i>
                                Add To Favorites
                            </button>
                            <a href={this.props.recipe.strSource} 
                               className="btn btn-lg btn-link" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt mr-2"></i>
                                Read More
                            </a>
                            <Alert/>
                         </div>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-12 pl-0">
                              <h5 className="card-title display-4 border-bottom">
                                <i className="far fa-flag mr-2"></i> 
                                    {this.props.recipe.strArea}
                              </h5>
                          </div>
                      </div>
                      <div className="row">
                        <Instructions/>
                        <Ingredients/>
                    </div>
                  </div>
                </div>
            </div>
        <Modal setModalContent={this.setModalContent}/>                  
    </div>
      }
}

Recipe.propTypes = {
    saveRecipe:PropTypes.func.isRequired,
    setRedirectMessage:PropTypes.func.isRequired,
    getRecipeById:PropTypes.func.isRequired,
    updatePageTitle:PropTypes.func.isRequired,
    setModalContent:PropTypes.func.isRequired,
    errors:PropTypes.object,
    saveFeedBack:PropTypes.object.isRequired,
    recipe:PropTypes.object,
    currentUser:PropTypes.object,
    pageTitle:PropTypes.string.isRequired
}

const mapStateToProps = state =>({
    errors:state.error,
    saveFeedBack:state.alerts.saveMessage,
    recipe:state.recipe.recipe,
    currentUser:state.currentUser,
    pageTitle:state.appUtil.pageTitle
})
 
export default connect(mapStateToProps,
    {saveRecipe,
    getRecipeById, 
    setRedirectMessage,
    updatePageTitle,
    setModalContent})(Recipe);