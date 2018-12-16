import React from 'react';
import { Component } from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import Exception from "../errors/Exception";
import '../home/home.css';
import axios from 'axios';
import Loading from '../../sections/Loading';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';



class  Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            recipes:[],
            recipeDetail:{},
            pageTitle:"Your Favorites",
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
                <div className="container shadow-sm my-2 rounded bg-white">
                    <div className="row">
                        <div className="col-12">
                        {this.state.recipes.length?
                            <FavoriteRecipes state={this.state} onClick={this.onClick} history={this.props.history}/>:
                            <Loading/>
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