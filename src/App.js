
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
// import User from "./components/pages/user/user";
// import Search from "./components/pages/Search/Search";
// import Saved from "./components/pages/Saved/Saved";
import RecipeCategories from "./components/pages/category/RecipeCategory";
import Recipes from "./components/pages/recipes/Recipes";
import Category from "./components/pages/category/Category";
import RecipeDetail from "./components/pages/recipeDetail/RecipeDetail";
import Favorites from "./components/pages/favorites/Favorites";
import UserForm from "./components/pages/user/UserForm";
import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer";
import "./App.css";


const App = () => (
  <Router>
    <div>
    <Nav/>
      <div className="container-fluid .App-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Category}/>
        <Route exact path="/categories/:category" component={Recipes}/>
        <Route exact path="/categories/:category/:recipeId" component={RecipeDetail}/>
        <Route exact path="/user/favorites" component={Favorites}/>
        <Route exact path="/user/login" component={UserForm}/>
      </div>
      <Footer/>
    </div>
  </Router>
);

export default App;

