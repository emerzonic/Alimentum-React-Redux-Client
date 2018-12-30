import React from 'react';
import {
  Component
} from 'react';
import '../home/home.css';
import Header from "../../sections/Header";
import PageHeader from '../../sections/Page Header';
import {
  getRecipesByCategory
} from "../../../actions/recipeActions";
import {
  updatePageTitle
} from "../../../actions/appUtilActions";
import Loading from '../../sections/Loading';
import PropTypes from "prop-types";
import {
  connect
} from 'react-redux';
import "./recipes.css";
import Exception from '../errors/Exception';

class Recipes extends Component {

  componentDidMount() {
    let category = this.props.match.params.category;
    let pageTitle = `${category} recipes`;
    this.props.getRecipesByCategory(category);
    this.props.updatePageTitle(pageTitle);
  }

  render() {
    let category = this.props.match.params.category;
      return ( 
        <div>
            <Header  {...this.props}/>
            <PageHeader {...this.props}/>
            <div className="container items-container">
                      <div className="row">
                      {this.props.errors !== undefined?
                      !this.props.recipes.length?<Loading/>:
                        this.props.recipes.map(item => 
                          <div className="card col-md-4 my-2 border-0 shadow-sm recipe-div" key={item.idMeal}>
                            <img className="card-img-top rounded-circle mt-3"  
                                data-type="name"
                                src={item.strMealThumb} alt={this.props.name} 
                                onClick={()=>this.props.history.push(`/categories/${category}/${item.strMeal}/${item.idMeal}`)}/>
                            <div className="card-body recipe-title">
                              <h5 className="card-title text-center">{item.strMeal}</h5>
                            </div>
                          </div>
                        ):<Exception/>}
                  </div>
              </div>
          </div>
               )
          }
    }

Recipes.propTypes = {
  getRecipesByCategory: PropTypes.func.isRequired,
  updatePageTitle: PropTypes.func.isRequired,
  pageTitle: PropTypes.string,
  errors: PropTypes.object,
  recipes: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  recipes: state.recipe.recipes,
  pageTitle: state.appUtil.pageTitle
})
export default connect(mapStateToProps, {
  getRecipesByCategory,
  updatePageTitle
})(Recipes);