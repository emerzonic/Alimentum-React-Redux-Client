import React from 'react';
import { Component } from 'react';
import Header from "../../sections/Header";
import assets from '../../../assets';
import util from '../../util';
import '../home/home.css';
import PageHeader from '../../sections/Page Header';
import "./category.css";

class  Category extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            recipes:[],
            recipeDetail:{},
            pageTitle:"",
            saveFeedBack:"",
            unsaveFeedBack:"",
            name:"",
            isLoading:true
        }

     this.state.categories = util.getDataArray(assets.category); 
     this.state.pageTitle = "Categories";
     this.state.isLoading = false;

}
    render() { 
        return (
            <div>
                <Header {...this.props} state={this.state}/>
                <PageHeader {...this.props} state={this.state}/>
                    <div className="container items-container">
                        <div className="row">
                        {this.state.categories.map((item, i) => {
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
 
export default Category;
