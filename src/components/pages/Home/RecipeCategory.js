import React from 'react';
import  {Component} from 'react';
import './home.css';


class RecipeCategories extends Component {
  render() {
    let recipeCategories = this.props.state.categories.map((item, i) => {
      return <div className="card col-md-4 my-2 border-0 shadow-sm category-div" key={i}>
                <img className="card-img-top" src={item.image} alt={this.props.name}/>
                <div className="card-body">
                  <h5 className="card-title category-title">{item.category}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-primary col-sm-12" data-type="category" data-param={item.category} onClick={this.props.onClick}>Go somewhere</button>
                </div>
              </div>
        });
    return (
      recipeCategories
    );
  }
}
 
export default RecipeCategories;