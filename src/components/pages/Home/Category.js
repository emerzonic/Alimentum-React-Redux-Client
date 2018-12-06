// import React from 'react';
// import { Component } from 'react';
// import Nav from "./Nav";
// import RecipeCategories from "./RecipeCategory";
// import Recipes from "./Recipes";
// import RecipeDetail from "./RecipeDetail";
// import Footer from "./Footer";
// import './home.css';
// import Img from '../../../assets';
// import category from '../../../category';
// import axios from 'axios';
// class  Category extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             categories:[],
//             recipes:[],
//             recipeDetail:{},
//             pageTile:''
//         }

//          this.dataList = [];
//          this.images = [];
//          this.category = [];
        
//          this.sumList = ()=>{
//          for(let i = 0; i<this.images.length; i++){
//              const newObj = {
//                  img: this.images[i],
//                  cat:this.category[i]
//              }
//              this.dataList.push(newObj)
//          }
//          }
         
//          //This method  takes the "Img" object above extra and 
//          //push all the values to the images property array 
//          this.getData = (obj, arr) => {
//            for (const key of Object.keys(obj)) {
//              arr.push(obj[key]);
//            }
//          } 
//         //Get the images once
//         this.getData(Img, this.images);
//         this.getData(category, this.category);
//         this.sumList();
//         this.state.categories = this.dataList;
//         this.state.pageTile = "Categories";

//         this.onClick = (event) => {
//             let type = event.target.getAttribute("data-type");
//             let param = event.target.getAttribute("data-param");
//             type === "category"?
//             this.getRecipesByCategory(param):
//             type === "name"?
//             this.getRecipesById(param):
//             console.log("no param");
//     };
    

//     this.getRecipesByCategory = (param) =>{  
//         axios.get(`http://localhost:5000/searchByCategory/${param}`).then(res => 
//             this.setState({
//                 recipes: res.data,
//                 pageTile:param,
//                 categories:[]
//             })
//         ).catch(err => console.log(err));
//     };

//     this.getRecipesById = (param) =>{  
//         axios.get(`http://localhost:5000/searchByRecipeId/${param}`).then(res => 
//             this.setState({
//                 recipes: [],
//                 pageTile:res.data.strMeal,
//                 categories:[],
//                 recipeDetail:res.data[0]
//             })
//         ).catch(err => console.log(err));
//     };

// }
    
//     render() { 
//         console.log(this.state);
//         return (
//             <div>
//                 <Nav/>
//                     <div className="jumbotron jumbotron-fluid shadow">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <h1 className="display-4">{this.state.pageTile}</h1>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <form className="form-inline mt-3">
//                                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//                                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <div className="row">
//                         {this.state.categories.length?
//                         <RecipeCategories state={this.state} onClick={this.onClick}/>:
//                         this.state.recipes.length?
//                         <Recipes state={this.state} onClick={this.onClick}/>:
//                         this.state.recipesDetail!==null?
//                         <RecipeDetail recipeDetail={this.state.recipeDetail} onClick={this.onClick}/>:""}
//                         </div>
//                     </div>
//                 <Footer/>
//             </div>
//          );
//     }
// }
 
// export default Category;