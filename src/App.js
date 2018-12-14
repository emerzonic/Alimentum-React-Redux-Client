
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import User from "./components/pages/Home/User";
// import Search from "./components/pages/Search/Search";
// import Saved from "./components/pages/Saved/Saved";
import RecipeCategories from "./components/pages/Home/RecipeCategory";
import Recipes from "./components/pages/Home/Recipes";
import Category from "./components/pages/Home/Category";
import RecipeDetail from "./components/pages/Home/RecipeDetail";
import Favorites from "./components/pages/Home/Favorites";
import UserForm from "./components/pages/Home/UserForm";
import Nav from "./components/pages/Home/Nav";
import Footer from "./components/pages/Home/Footer";


const App = () => (
  <Router>
    <div>
    <Nav/>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Category}/>
      <Route exact path="/categories/recipes" component={Recipes}/>
      <Route exact path="/categories/recipes/details" component={RecipeDetail}/>
      <Route exact path="/user/favorites" component={Favorites}/>
      <Route exact path="/user/login" component={UserForm}/>
      <Route exact path="/signin" component={User}/>
      <Route exact path="/signup" component={User}/>
      <Route exact path="/signout" component={User}/>
      <Footer/>
    </div>
  </Router>
);

export default App;

