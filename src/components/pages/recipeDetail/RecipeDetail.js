import React from 'react';
import  {Component} from 'react';
import Modal from '../../sections/Modal';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';
import Img from '../../../assets';
// import axios from 'axios';
// import util from '../../util';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { saveRecipe } from "../../../actions/projectActions";
import { getRecipeById } from "../../../actions/projectActions";
import { updatePageTitle } from "../../../actions/projectActions";

import '../home/home.css';
import "./detail.css";

let img = {
    backgroundImage: 'url(' +Img.youtube.img + ')',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"6rem"
  };
class Recipe extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props = { 
    //         recipe:{}||[],
    //         pageTitle:"",
    //         saveFeedBack:"",
    //         errors:{}
    //     }

    // this.getRecipeById = () =>{ 
        // let recipeId = "52807";
        

        // axios.get(`http://localhost:5000/api/recipes/searchByRecipeId/${recipeId}`).then(res => {
        // let refinedRecipe = util.getRecipeObj(res.data[0]);
        //     this.setState({
        //         recipe:refinedRecipe,
        //         pageTitle:`Recipe Detail for "${refinedRecipe.strMeal}".`
        //     })
        // }).catch(err => console.log(err));
    // };


    saveRecipe = () =>{  
        let recipe = this.props.recipe;
        let userId = 2;
        this.props.saveRecipe(recipe, userId)

        // axios.post(`http://localhost:5000/api/currentUser/saveRecipe/${userId}`, recipe).then(res => {
        //     this.setState({
        //         saveFeedBack:res.data.text,
        //     })            
        // }).catch(err => console.log(err));
    };
// }
    // componentWillReceiveProps(nextProps){
    //     // if (nextProps.errors) {
    //         this.setState({
    //             errors:nextProps.errors,
    //             saveFeedBack:nextProps.saveFeedback,
    //             recipe:nextProps.recipe
    //         })
    //     // }
    // }
    componentDidMount(){
        let recipeId = this.props.match.params.recipeId;
        let recipe = this.props.match.params.recipe;
        this.props.getRecipeById(recipeId);
        this.props.updatePageTitle(recipe);
    }
  render() {
      console.log(this.props)
      return <div>
                <Header/>
                <PageHeader {...this.props}/>
                <div className="container px-0 my-2 items-container" >
                 <div className="card mb-3 recipe-detail-div border-0 shadow-sm p-md-4">
                <div className="row">
                      <div className="col-md-8 pl-0">
                          <img className="card-img-top img-fluid rounded ml-md-4" src={this.props.recipe.strMealThumb} alt={this.props.name}/>
                      </div>
                    <div className="col-md-4">
                            <button className="mx-1 w-100 m-2 youtube border-0 btn-lg" style={img} data-toggle="modal" data-target="#exampleModal">Watch Video</button>
                            <button className="btn btn-lg btn-primary mx-1 w-100 m-2" onClick={this.saveRecipe}>Save Recipe</button>
                            <a href={this.props.recipe.strSource} className="btn btn-lg btn-primary mx-1 w-100 m-2" target="_blank" rel="noopener noreferrer">Read More</a>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-12 pl-0">
                              <h5 className="card-title display-4"><i className="far fa-flag"></i> {this.props.recipe.strArea}</h5>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-8 pl-0">
                          <h5 className="card-title">Instructions</h5>
                          <ul className="card-text bg-light p-4">
                                {this.props.recipe.strInstructions?
                                    this.props.recipe.strInstructions.map((instr, i)=>{
                                    return(<div className="p-2 bg-light" key={i}><i className="fas fa-check-square mr-2 d-inline"></i><li className="instruction d-inline">{instr}</li></div> )
                                }):""}
                            </ul>
                          </div>
                        <div className="col-md-4">
                        <h5 className="card-title"><i className="fas fa-carrot"></i> Ingredients</h5>
                          <div className="card w-100 mr-2">
                              <ul className="list-group list-group-flush border-0">
                                {this.props.recipe.strIngredients?
                                    this.props.recipe.strIngredients.map((ing, i)=>{
                                  return <li className="list-group-item ingredient py-1" key={i}>{this.props.recipe.strMeasurements[i]} {ing}</li>
                                }):""}
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <Modal recipe={this.props.recipe}/>                  
    </div>
      }
}

Recipe.propTypes = {
    saveRecipe:PropTypes.func.isRequired,
    getRecipeById:PropTypes.func.isRequired,
    updatePageTitle:PropTypes.func.isRequired,
    errors:PropTypes.object,
    saveFeedBack:PropTypes.string,
    recipe:PropTypes.object,
    pageTitle:PropTypes.string.isRequired
}

const mapStateToProps = state =>({
    errors:state.error,
    saveFeedBack:state.saveFeedBack,
    recipe:state.recipe,
    pageTitle:state.pageTitle
})
 
export default connect(mapStateToProps,{saveRecipe,getRecipeById, updatePageTitle})(Recipe);