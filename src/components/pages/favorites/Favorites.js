import React from 'react';
import { Component } from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import RecipeDetail from "../recipeDetail/RecipeDetail";
import Exception from "../errors/Exception";
import '../home/home.css';
// import Img from '../../../assets';
import axios from 'axios';
import Loading from '../../sections/Loading';
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

    this.onClick = (event) => {
        let type = event.target.getAttribute("data-type");
        let id = event.target.getAttribute("data-id");
        console.log(type +" "+ id)
        type === "delete"?
            this.deleteRecipe(id):
        type === "detail"?
            this.getRecipeById(id):
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
                    {this.state.recipes.length?
                        <FavoriteRecipes state={this.state} history={this.props.history}/>:
                        <Loading/>
                   } 
                    </div>
                </div>:
                <Exception/> 
            }    
            </div>
         );
    }
}
 
export default Favorites;