import React from 'react';
import  {Component} from 'react';
import Modal from '../../sections/Modal';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';
import axios from 'axios';
import util from '../../util';
import '../home/home.css';


class recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipe:[],
            pageTitle:"Recipe Detail",
            saveFeedBack:"",
            unsaveFeedBack:"",
            name:""
        }

    this.getRecipeById = () =>{ 
        let recipeId = this.props.match.params.recipeId;
        axios.get(`http://localhost:5000/searchByRecipeId/${recipeId}`).then(res => {
        let refinedRecipe = util.getRecipeObj(res.data[0]);
            this.setState({
                recipe:refinedRecipe
            })
        }).catch(err => console.log(err));
    };

    this.saveRecipe = () =>{  
        let recipe = this.state.recipe;
        let username = "emerson";
        axios.post(`http://localhost:5000/currentUser/saveRecipe/${username}`, recipe).then(res => {
            let save = "";
            let unsave = "";
            if(res.data === "success"){
                save = "Your recipe was successfully saved!"
            }else{
                unsave = "This recipe is already saved as favorite."
            }
            this.setState({
                saveFeedBack:save,
                unsaveFeedBack:unsave
            })            
        }).catch(err => console.log(err));
    };
}
    
    componentDidMount(){
      this.getRecipeById();
    }
  render() {
      return <div>
                <Header {...this.props} state={this.state}/>
                <PageHeader {...this.props} state={this.state}/>
                <div className="container px-0 my-2 items-container" >
                 <div className="card mb-3 recipe-detail-div border-0 shadow-sm p-md-4">
                <div className="row">
                      <div className="col-md-8 pl-0">
                          <img className="card-img-top img-fluid rounded ml-md-4" src={this.state.recipe.strMealThumb} alt={this.props.name}/>
                      </div>
                      <div className="col-md-4">
                            <button className="btn btn-primary mx-1 w-100 m-2" data-toggle="modal" data-target="#exampleModal">Watch Video</button>
                            <button className="btn btn-primary mx-1 w-100 m-2" onClick={this.saveRecipe}>Save Recipe</button>
                            <a href={this.state.recipe.strSource} className="btn btn-primary mx-1 w-100 m-2" target="_blank" rel="noopener noreferrer">Read More</a>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-12">
                              <h5 className="card-title display-4">{this.state.recipe.strMeal}</h5>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-8 pl-0">
                          <h5 className="card-title">Instructions</h5>
                          <ul className="card-text bg-light p-4">
                                {this.state.recipe.strInstructions?
                                    this.state.recipe.strInstructions.map((instr, i)=>{
                                    return <li className="" key={i}>{instr}</li>
                                }):""}
                            </ul>
                          </div>
                        <div className="col-md-4">
                        <h5 className="card-title">Ingredients</h5>
                          <div className="card w-100 mr-2">
                              <ul className="list-group list-group-flush border-0">
                                {this.state.recipe.strIngredients?
                                    this.state.recipe.strIngredients.map((ing, i)=>{
                                  return <li className="list-group-item py-1" key={i}>{this.state.recipe.strMeasurements[i]} {ing}</li>
                                }):""}
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <Modal recipe={this.state.recipe}/>                  
    </div>
      }
}
 
export default recipe;