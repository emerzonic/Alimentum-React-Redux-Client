import React from 'react';
import { Component } from 'react';
import RecipeCategories from "./RecipeCategory";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import './home.css';
// import Img from '../../../assets';
import axios from 'axios';
// import util from '../../util';


class  Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            recipes:[],
            recipeDetail:{},
            pageTitle:"",
            saveFeedBack:"",
            name:""
        }

    //      this.dataList = [];
    //      this.images = [];
    //      this.category = [];
        
    //      this.sumList = ()=>{
    //      for(let i = 0; i<this.images.length; i++){
    //          const newObj = {
    //              img: this.images[i],
    //              cat:this.category[i]
    //          }
    //          this.dataList.push(newObj)
    //      }
    //      }
         
    //      //This method  takes the "Img" object above extra and 
    //      //push all the values to the images property array 
    //      this.getData = (obj, arr) => {
    //        for (const key of Object.keys(obj)) {
    //          arr.push(obj[key]);
    //        }
    //      } 

    //      this.getDetailData = (obj)=>{

    //      }

    // //Get the images once
    //  this.getData(Img.catImg, this.images);
    //  this.getData(category, this.category);
    //  this.sumList();
    //  this.state.categories = this.dataList;
    //  this.state.pageTitle = "Categories";

    // this.onClick = (event) => {
    //     let type = event.target.getAttribute("data-type");
    //     let param = event.target.getAttribute("data-param");
    //     type === "category"?
    //     this.getRecipesByCategory(param):
    //     type === "name"?
    //     this.getRecipesById(param):
    //     type === "save"?
    //     this.saveRecipe():
    //     console.log("no param");
    // };

    // this.onChange = (e) => {
    //     this.setState({name:e.target.value})
    // };

    // this.onSubmit = (e) => {
    //     e.preventDefault();
    //     let name = this.state.name;
    //     axios.get(`http://localhost:5000/searchByName/${name}`).then(res => 
    //     this.setState({
    //         recipes: res.data,
    //         pageTitle:"Results for " + name,
    //         categories:[]
    //     })
    // ).catch(err => console.log(err));
    // };
    

    this.getUserRecipes = () =>{  
        let username = "emerson";
        axios.get(`http://localhost:5000/getUserRecipes/${username}`).then(res => 
            this.setState({
                recipes: res.data,
                pageTitle:"",
                categories:[]
            })
        ).catch(err => console.log(err));
    };

    // this.getRecipesById = (param) =>{  
    //     axios.get(`http://localhost:5000/searchByRecipeId/${param}`).then(res => {
    //     let refinedRecipe = util.getRecipeObj(res.data[0]);
    //         this.setState({
    //             recipes: [],
    //             pageTitle:'',
    //             categories:[],
    //             recipeDetail:refinedRecipe
    //         })
    //     }).catch(err => console.log(err));
    // };

    // this.saveRecipe = () =>{  
    //     let recipe = this.state.recipeDetail;
    //     axios.post("http://localhost:5000/saveRecipe/", recipe).then(res => {
    //         let response = "";
    //         if(res.data === "success"){
    //             response = "Your recipe was successfully saved!"
    //         }else{
    //             response = "This recipe is already saved as favorite."
    //         }
    //         this.setState({
    //             saveFeedBack:response
    //         })            
    //     }).catch(err => console.log(err));
    // };
}

componentDidMount(){
    this.getUserRecipes()
}
    
    render() { 
        console.log(this.state);
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <Recipes state={this.state} onClick={this.onClick}/>                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Favorites;