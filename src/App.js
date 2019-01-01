import RecipeDetail from "./components/pages/recipeDetail/RecipeDetail";
import Logout from "./components/pages/user/Logout";
import "./App.css";
import Nav from "./components/sections/Nav";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/user/Login";
import Footer from "./components/sections/Footer";
import SignUp from "./components/pages/user/SignUp";
import Results from "./components/pages/search/Results";
import Recipes from "./components/pages/recipes/Recipes";
import Category from "./components/pages/category/Category";
import Favorites from "./components/pages/favorites/Favorites";
import {
  SET_CURRENT_USER
} from "./actions/types";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {
  setJwtToken,
  updateJwtToken,
  checkJwtTokenStatus
} from "./securityUtlis/jwtToken";
import React from "react";
import store from "./store";
import {
  Provider
} from "react-redux";
import PusherSmall from "./components/sections/Pusher-sm";


const jwtToken = localStorage.getItem("JwtToken")
if (jwtToken) {
  setJwtToken(jwtToken)
  updateJwtToken(jwtToken, store.dispatch, SET_CURRENT_USER)
  checkJwtTokenStatus(jwtToken, store.dispatch)
}

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
    <Nav/>
      <div className="container-fluid .App-container p-0 m-0 ">
        <Route exact path="/" component={Home} />
        <Route exact path="/Alimentum-React-Redux-Client/categories" component={Category}/>
        <Route exact path="Alimentum-React-Redux-Client/categories/:category" component={Recipes}/>
        <Route exact path="Alimentum-React-Redux-Client/categories/:category/:recipe/:recipeId" component={RecipeDetail}/>
        <Route exact path="Alimentum-React-Redux-Client/search/:searchTerm/results" component={Results}/> 
        <Route exact path="Alimentum-React-Redux-Client/user/favorites" component={Favorites}/>
        <Route exact path="Alimentum-React-Redux-Client/user-form/signup" component={SignUp}/>
        <Route exact path="Alimentum-React-Redux-Client/user-form/login" component={Login}/>
        <Route exact path="Alimentum-React-Redux-Client/logout" component={Logout}/>
      </div>
      <PusherSmall/>
      <Footer/>
    </div>
  </Router>
  </Provider>
);

export default App;