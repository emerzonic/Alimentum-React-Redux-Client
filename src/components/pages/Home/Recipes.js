import React from 'react';
import  {Component} from 'react';
import './home.css';


class Recipes extends Component {
  render() {
    let recipes = this.props.state.recipes.map(item => {
      return <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                <img className="card-img-top rounded-circle mt-3"  
                     data-type="name" data-param={item.idMeal} 
                     onClick={this.props.onClick} src={item.strMealThumb} alt={this.props.name}/>
                <div className="card-body recipe-title">
                  <h5 className="card-title text-center">{item.strMeal}</h5>
                </div>
              </div>
        });
    return (
      recipes
    );
  }
}
 
export default Recipes;