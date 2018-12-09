import React from 'react';
import { Component } from 'react';
import Nav from "./Nav";
import RecipeCategories from "./RecipeCategory";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Footer from "./Footer";
import './home.css';
import Img from '../../../assets';
import category from '../../../category';
import axios from 'axios';
import util from '../../util';
class  Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            recipes:[],
            recipeDetail:{},
            pageTitle:"",
            saveFeedBack:"",

        }

         this.dataList = [];
         this.images = [];
         this.category = [];
        
         this.sumList = ()=>{
         for(let i = 0; i<this.images.length; i++){
             const newObj = {
                 img: this.images[i],
                 cat:this.category[i]
             }
             this.dataList.push(newObj)
         }
         }
         
         //This method  takes the "Img" object above extra and 
         //push all the values to the images property array 
         this.getData = (obj, arr) => {
           for (const key of Object.keys(obj)) {
             arr.push(obj[key]);
           }
         } 

         this.getDetailData = (obj)=>{

         }

    //Get the images once
     this.getData(Img, this.images);
     this.getData(category, this.category);
     this.sumList();
     this.state.categories = this.dataList;
     this.state.pageTitle = "Categories";

    this.onClick = (event) => {
        let type = event.target.getAttribute("data-type");
        let param = event.target.getAttribute("data-param");
        console.log(type);
        type === "category"?
        this.getRecipesByCategory(param):
        type === "name"?
        this.getRecipesById(param):
        type === "save"?
        this.saveRecipe():
        console.log("no param");
    };
    

    this.getRecipesByCategory = (param) =>{  
        axios.get(`http://localhost:5000/searchByCategory/${param}`).then(res => 
            this.setState({
                recipes: res.data,
                pageTitle:param,
                categories:[]
            })
        ).catch(err => console.log(err));
    };

    this.getRecipesById = (param) =>{  
        axios.get(`http://localhost:5000/searchByRecipeId/${param}`).then(res => {
        let refinedRecipe = util.getRecipeObj(res.data[0]);
        console.log(refinedRecipe);
            this.setState({
                recipes: [],
                pageTitle:'',
                categories:[],
                recipeDetail:refinedRecipe
            })
        }).catch(err => console.log(err));
    };

    this.saveRecipe = () =>{  
        console.log("save");
        let recipe = this.state.recipeDetail;
        console.log(recipe);
        axios.post("http://localhost:5000/saveRecipe/", recipe).then(res => {
            let response = "";
            if(res.data === "success"){
                response = "Your recipe was successfully saved!"
            }else{
                response = "Sorry, Something went wrong while saving your recipe. Please try again."
            }
            this.setState({
                saveFeedBack:response
            })            
        }).catch(err => console.log(err));
    };
}
    
    render() { 
        console.log(this.state);
        return (
            <div>
                <Nav/>
                    <div className="jumbotron jumbotron-fluid shadow">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h1 className="display-4">{this.state.pageTitle}</h1>
                                    <p className="">{this.state.saveFeedBack}</p>
                                </div>
                                <div className="col-md-8">
                                    <form className="form-inline mt-3 w-100">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        {this.state.categories.length?
                        <RecipeCategories state={this.state} onClick={this.onClick}/>:
                        this.state.recipes.length?
                        <Recipes state={this.state} onClick={this.onClick}/>:
                        this.state.recipesDetail!==null?
                        <RecipeDetail recipeDetail={this.state.recipeDetail} onClick={this.onClick}/>:""}
                        </div>
                    </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;
