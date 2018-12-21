import React from 'react';
import  {Component} from 'react';
import '../home/home.css';
import "./favorite.css";



class FavoriteRecipes extends Component {
  render() {
    let recipes = this.props.state.recipes.map(item => {
      return <div className="media my-3 p-md-3" key={item.idMeal} onClick={this.props.onClick}>
                <img className="mr-3 rounded-circle img-fluid
                         col-sm-12" src={item.strMealThumb}  alt={this.props.name}/>
                <div className="media-body col-sm-12">
                    <h5 className="mt-0 card-title">{item.strMeal}</h5>
                    <div className="mb-2">
                    </div>
                    <button type="button" className="btn btn-outline-danger  m-1" data-id={item.id}
                            onClick={this.props.deleteRecipe}> <i className="fas fa-trash-alt"></i> Delete</button>
                    <button type="button" className="btn btn-outline-success m-1" data-id={item.id} 
                            onClick={()=>this.props.history.push(`/categories/${item.strCategory}/${item.idMeal}`)}><i className="fas fa-clipboard-list"></i> See Detail</button>
                </div>
            </div>
        });
    return (
      recipes
    );
  }
}
 
export default FavoriteRecipes;