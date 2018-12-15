import React from 'react';
import  {Component} from 'react';
import '../home/home.css';


class RecipeCategories extends Component {
  render() {
    let recipeCategories = this.props.state.categories.map((item, i) => {
      return <div className="card col-md-4 my-2 border-0 shadow-sm category-div" key={i}>
                <img className="card-img-top mt-3 rounded" src={item.image} alt={this.props.name}/>
                <div className="card-body">
                  <h5 className="card-title category-title">{item.category}</h5>
                  <button className="btn btn-primary col-sm-12" data-type="category" 
                  onClick={()=>this.props.history.push(`/categories/${item.category}`)}>Go somewhere</button>
                </div>
              </div>
        });
    return (
      recipeCategories
    );
  }
}
 
export default RecipeCategories;