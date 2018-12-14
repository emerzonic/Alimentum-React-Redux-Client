import React from 'react';
import { Component } from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import RecipeDetail from "./RecipeDetail";
import Exception from "./Exception";
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
            deleteFeedBack:"",
            name:"",
            exception:""
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

    this.onClick = (event) => {
        let type = event.target.getAttribute("data-type");
        let id = event.target.getAttribute("data-id");
        console.log(type +" "+ id)
        type === "delete"?
            this.deleteRecipe(id):
        type === "detail"?
            this.getRecipeById(id):
        // type === "save"?
        // this.saveRecipe():
        console.log("no param");
    };

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
        axios.get(`http://localhost:5000/getUserRecipes/${username}`).then(res => {
        if(!res || res.data==="exception"){
            this.setState({
                exception: "exception",
            })
        }else{
            this.setState({
                recipes: res.data,
            })
        }
        }).catch(err => console.log(err));
    };

    this.getRecipeById = (id) =>{  
        axios.get(`http://localhost:5000/getOneRecipe/${id}`).then(res => {
            console.log(res)
            // this.setState({
            //     recipes: [],
            //     pageTitle:'',
            //     categories:[],
            //     recipeDetail:res.data
            // })
        }).catch(err => console.log(err));
    };

    this.deleteRecipe = (id) =>{  
        let username = "emerson";
        axios.get(`http://localhost:5000/deleteRecipe/${username}/${id}`).then(res => {
            let response = "";
            if(res.data === "success"){
                response = "Your recipe was successfully saved!"
                this.getUserRecipes();
            }else{
                response = "This recipe is already saved as favorite."
            }
        }).catch(err => console.log(err));
    };
}

componentDidMount(){
    this.getUserRecipes()
}
    
    render() { 
        console.log(this.state);
        return (
            <div>
            {!this.state.exception?
                <div className="container">
                    <div className="row">
                    {this.state.recipes?
                        <FavoriteRecipes state={this.state} onClick={this.onClick}/>:
                    this.state.recipeDetail?
                    <RecipeDetail recipeDetail={this.state.recipeDetail} onClick={this.onClick}/>:""} 
                    </div>
                </div>:
                <Exception/> 
            }    
            </div>
         );
    }
}
 
export default Favorites;