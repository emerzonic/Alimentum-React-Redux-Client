import React from 'react';
import { Component } from 'react';
import Header from "../../sections/Header";
import assets from '../../../assets';
import axios from 'axios';
import util from '../../util';
import '../home/home.css';

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
            name:""
        }

     this.state.categories = util.getDataArray(assets.category); 
     this.state.pageTitle = "Categories";

    this.onChange = (e) => {
        this.setState({name:e.target.value})
    };

    this.onSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name;
        axios.get(`http://localhost:5000/searchByName/${name}`).then(res => 
        this.setState({
            recipes: res.data,
            pageTitle:"Results for " + name,
            categories:[]
        })
    ).catch(err => console.log(err));
    };
    
}
    render() { 
        return (
            <div>
                <Header state={this.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
                    <div className="container">
                        <div className="row">
                        {this.state.categories.map((item, i) => {
                            return <div className="card col-md-4 my-2 border-0 shadow-sm category-div" key={i}>
                                      <img className="card-img-top mt-3 rounded" src={item.image} alt={this.props.name}/>
                                      <div className="card-body">
                                        <h5 className="card-title category-title">{item.category}</h5>
                                        <button className="btn btn-primary col-sm-12" data-type="category" 
                                                onClick={()=>this.props.history.push(`/categories/${item.category}`)}>Go somewhere</button>
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
