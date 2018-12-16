import "./App.css";
import React from "react";
import Nav from "./components/sections/Nav";
import Home from "./components/pages/home/Home";
import Footer from "./components/sections/Footer";
import UserForm from "./components/pages/user/UserForm";
import Results from "./components/pages/search/Results";
import Recipes from "./components/pages/recipes/Recipes";
import Category from "./components/pages/category/Category";
import Favorites from "./components/pages/favorites/Favorites";
import { BrowserRouter as Router, Route} from "react-router-dom";
import RecipeDetail from "./components/pages/recipeDetail/RecipeDetail";

const App = () => (
  <Router>
    <div>
    <Nav/>
      <div className="container-fluid .App-container p-0 m-0 ">
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Category}/>
        <Route exact path="/categories/:category" component={Recipes}/>
        <Route exact path="/categories/:category/:recipeId" component={RecipeDetail}/>
        <Route exact path="/search/results" component={Results}/> 
        <Route exact path="/user/favorites" component={Favorites}/>
        <Route exact path="/user/loginOrSignup" component={UserForm}/>
      </div>
      <Footer/>
    </div>
  </Router>
);

export default App;

