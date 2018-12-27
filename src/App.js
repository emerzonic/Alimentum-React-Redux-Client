import "./App.css";
import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import Nav from "./components/sections/Nav";
import Home from "./components/pages/home/Home";
import {SET_CURRENT_USER} from "./actions/types";
import Login from "./components/pages/user/Login";
import Footer from "./components/sections/Footer";
import SignUp from "./components/pages/user/SignUp";
import Results from "./components/pages/search/Results";
import Recipes from "./components/pages/recipes/Recipes";
import Category from "./components/pages/category/Category";
import Favorites from "./components/pages/favorites/Favorites";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {setJwtToken, updateJwtToken, checkJwtTokenStatus} from "./securityUtlis/jwtToken";
import RecipeDetail from "./components/pages/recipeDetail/RecipeDetail";
import Logout from "./components/pages/user/Logout";


const jwtToken = localStorage.getItem("JwtToken")
if(jwtToken){
  setJwtToken(jwtToken)
  updateJwtToken(jwtToken, store.dispatch, SET_CURRENT_USER )
  checkJwtTokenStatus(jwtToken, store.dispatch)
}



const App = () => (
  <Provider store={store}>
  <Router>
    <div>
    <Nav/>
      <div className="container-fluid .App-container p-0 m-0 ">
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Category}/>
        <Route exact path="/categories/:category" component={Recipes}/>
        <Route exact path="/categories/:category/:recipe/:recipeId" component={RecipeDetail}/>
        <Route exact path="/search/:searchTerm/results" component={Results}/> 
        <Route exact path="/user/favorites" component={Favorites}/>
        <Route exact path="/user-form/signup" component={SignUp}/>
        <Route exact path="/user-form/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
      </div>
      <Footer/>
    </div>
  </Router>
  </Provider>
);

export default App;

