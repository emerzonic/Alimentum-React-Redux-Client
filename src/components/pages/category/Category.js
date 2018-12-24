import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, updatePageTitle } from "../../../actions/projectActions";
import PageHeader from '../../sections/Page Header';
import Header from "../../sections/Header";
import Loading from '../../sections/Loading';
import PropTypes from "prop-types";
import '../home/home.css';
import "./category.css";

class  Category extends Component {

componentDidMount(){
    this.props.getCategories();
    this.props.updatePageTitle("Recipe Categories");
  }
    render() { 
        return (
            <div>
                <Header {...this.props}/>
                <PageHeader {...this.props}/>
                    <div className="container items-container">
                        <div className="row">
                        {!this.props.categories.length?<Loading/>:
                            this.props.categories.map((item, i) => {
                            return <div className="card col-md-4 my-2 border-0 shadow-sm category-div" key={i}>
                                      <img className="card-img-top mt-3 rounded" 
                                           src={item.image} alt={this.props.name}
                                           onClick={()=>this.props.history.push(`/categories/${item.category}`)}
                                           />
                                      <div className="card-body">
                                        <h5 className="card-title category-title">{item.category}</h5>
                                        <button className="btn btn-outline-success col-sm-12" data-type="category" 
                                                onClick={()=>this.props.history.push(`/categories/${item.category}`)}>Get Recipes</button>
                                      </div>
                                    </div>
                              })}
                        </div>
                    </div>
            </div>
         );
    }
}
 
Category.propTypes = {
    updatePageTitle:PropTypes.func.isRequired,
    getCategories:PropTypes.func.isRequired,
    pageTitle:PropTypes.string,
    errors:PropTypes.object,
    categories:PropTypes.array.isRequired,
    }
  
  const mapStateToProps = state =>({
      errors:state.error,
      categories:state.categories,
      pageTitle:state.pageTitle
  })
export default connect(mapStateToProps,{getCategories, updatePageTitle})(Category);
