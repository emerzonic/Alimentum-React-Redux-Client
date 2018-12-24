import React from 'react';
import { Component } from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import Exception from "../errors/Exception";
import '../home/home.css';
import axios from 'axios';
import Loading from '../../sections/Loading';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';
import "./favorite.css";



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
            exception:"",
            isLoading:true
        }

    this.getUserRecipes = () =>{  
        let userId = 2;
        axios.get(`http://localhost:5000/api/currentUser/getUserRecipes/${userId}`).then(res => {
            console.log(res.data)
        if(!res || res.data==="exception"){
            this.setState({
                exception: "exception",
                isLoading:false
            })
        }else{
            this.setState({
                recipes: res.data,
                isLoading:false,
                pageTitle:res.data.length?"Your Favorites.":"You have not saved any recipe."

            })
        }
        }).catch(err => console.log(err));
    };


    this.deleteRecipe = (event) =>{  
        let recipeId = event.target.getAttribute("data-id");
        let userId = 2;
        axios.delete(`http://localhost:5000/api/currentUser/deleteRecipe/${userId}/${recipeId}`).then(res => {
                this.getUserRecipes();
        }).catch(err => console.log(err));
    };
}
componentDidMount(){
    this.getUserRecipes()
}
    render() { 
        return (
            <div>
            <Header {...this.props} state={this.state}/>
            <PageHeader {...this.props} state={this.state}/>
            {!this.state.exception?
                <div className="container items-container shadow-sm my-2 rounded bg-white">
                    <div className="row">
                        <div className="col-12">
                        {this.state.isLoading? <Loading/>:""}
                        {this.state.recipes.length?
                            <FavoriteRecipes state={this.state} 
                                             onClick={this.onClick} 
                                             deleteRecipe={this.deleteRecipe} 
                                             history={this.props.history}/>:""
                        } 
                        </div>
                    </div>
                </div>:
                <Exception/> 
            }    
            </div>
         );
    }
}
 
export default Favorites;