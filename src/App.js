import "./App.css";
import React from "react";
import Nav from "./components/sections/Nav";
import Home from "./components/pages/home/Home";
import Footer from "./components/sections/Footer";
import User from "./components/pages/user/User";
import Results from "./components/pages/search/Results";
import Recipes from "./components/pages/recipes/Recipes";
import Category from "./components/pages/category/Category";
import Favorites from "./components/pages/favorites/Favorites";
import { BrowserRouter as Router, Route} from "react-router-dom";
import RecipeDetail from "./components/pages/recipeDetail/RecipeDetail";
import {Provider} from "react-redux";
import store from "./store";

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
        <Route exact path="/user-form/:form" component={User}/>
      </div>
      <Footer/>
    </div>
  </Router>
  </Provider>
);

export default App;

