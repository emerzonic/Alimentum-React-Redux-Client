import React from 'react';
import  {Component} from 'react';
import './home.css';
import Modal from './Modal';


class RecipeDetail extends Component {
    getDetails = ()=>{
    

  };
  render() {
      return <div>
      <div className="card mb-3 recipe-detail-div border-0 shadow-sm">
                <div className="row">
                      <div className="col-md-8">
                          <img className="card-img-top img-fluid rounded ml-md-4" src={this.props.recipeDetail.strMealThumb} alt={this.props.name}/>
                      </div>
                      <div className="col-md-4">
                            <button className="btn btn-primary mx-1 w-100 m-2" data-toggle="modal" data-target="#exampleModal">Watch Video</button>
                            <button className="btn btn-primary mx-1 w-100 m-2" data-type="save" onClick={this.props.onClick}>Save Recipe</button>
                            <a href={this.props.recipeDetail.strSource} className="btn btn-primary mx-1 w-100 m-2" target="_blank" rel="noopener noreferrer">Read More</a>
                      </div>
                  </div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-12">
                              <h5 className="card-title display-4">{this.props.recipeDetail.strMeal}</h5>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-8">
                          <h5 className="card-title">Instructions</h5>
                          <ul className="card-text bg-light p-4">
                                  {this.props.recipeDetail.strInstructions.map((instr, i)=>{
                                    return <li className="" key={i}>{instr}</li>
                                  })}
                              </ul>
                          </div>
                        <div className="col-md-4">
                        <h5 className="card-title">Ingredients</h5>
                          <div className="card w-100 mr-2">
                              <ul className="list-group list-group-flush border-0">
                                {this.props.recipeDetail.strIngredients.map((ing, i)=>{
                                  return <li className="list-group-item py-1" key={i}>{this.props.recipeDetail.strMeasurements[i]} {ing}</li>
                                })}
                              </ul>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
        <Modal recipe={this.props.recipeDetail}/>                  
    </div>
      }
}
 
export default RecipeDetail;