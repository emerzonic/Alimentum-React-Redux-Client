import React from 'react';
import  {Component} from 'react';
import '../home/home.css';


class FavoriteRecipes extends Component {
  render() {
    let recipes = this.props.state.recipes.map(item => {
      return <div className="media my-3" key={item.idMeal} onClick={this.props.onClick}>
                <img className="mr-3 rounded-circle img-fluid shadow-sm col-sm-12" src={item.strMealThumb}  alt={this.props.name}/>
                <div className="media-body col-sm-12">
                    <h5 className="mt-0">{item.strMeal}</h5>
                    <div className="mb-2">
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                    <button type="button" className="btn btn-link m-1" data-id={item.id} data-type="prepared"  onClick={this.props.onClick}> <i className="fas fa-check-circle"></i> Mark as prepared</button>
                    <button type="button" className="btn btn-outline-success  m-1" data-id={item.id} data-type="notes"  onClick={this.props.onClick}> <i className="fas fa-plus"></i> Add Notes</button>
                    <button type="button" className="btn btn-outline-danger  m-1" data-id={item.id} data-type="delete" onClick={this.props.onClick}> <i className="fas fa-trash-alt"></i> Delete</button>
                    <button type="button" className="btn btn-outline-warning m-1" data-id={item.id} onClick={()=>this.props.history.push(`/categories/${item.strCategory}/${item.idMeal}`)}><i className="fas fa-clipboard-list"></i> See Detail</button>
                </div>
            </div>
        });
    return (
      recipes
    );
  }
}
 
export default FavoriteRecipes;