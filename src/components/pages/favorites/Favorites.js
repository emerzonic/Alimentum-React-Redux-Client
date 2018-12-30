import React from 'react';
import {
    Component
} from 'react';
import FavoriteRecipes from "./FavoriteRecipes";
import Exception from "../errors/Exception";
import '../home/home.css';
import Loading from '../../sections/Loading';
import Header from '../../sections/Header';
import PageHeader from '../../sections/Page Header';
import "./favorite.css";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getUserRecipes,deleteRecipe,} from "../../../actions/recipeActions";
import {updatePageTitle} from "../../../actions/appUtilActions";
import {setRedirectMessage} from "../../../actions/alertsActions";

class Favorites extends Component {

    deleteRecipe = (event) => {
        let recipeId = Number(event.target.getAttribute("data-id"));
        let {id} = this.props.currentUser.user;
        this.props.deleteRecipe(recipeId, id);
    };

    componentWillReceiveProps = (nextProps) => {
      if(nextProps){
        let pageTitle = this.props.favoriteRecipes.length?
        "Your Favorites.":"You have not saved any recipe.";
        this.props.updatePageTitle(pageTitle);
      }
    }
    

    componentWillMount() {
        if (this.props.currentUser.validToken) {
            let {
                id
            } = this.props.currentUser.user;
            this.props.getUserRecipes(id);
        } else {
            this.props.setRedirectMessage(true, "view your saved recipes");
            this.props.history.push("/user-form/login")
        }
    }
    render() { 
        console.log(this.props)
        return (
            <div>
            <Header  {...this.props}/>
            <PageHeader {...this.props}/>
                <div className="container items-container shadow-sm my-2 rounded bg-white">
                    <div className="row">
                        <div className="col-12">
                        <div className="text-center text-success">{this.props.deleteFeedBack?this.props.deleteFeedBack.text:""}</div>
                        {this.props.errors !== undefined?
                            (this.props.favoriteRecipes.lenghth === 0 ? <Loading/>:
                            <FavoriteRecipes favoriteRecipes={this.props.favoriteRecipes} 
                                             onClick={this.onClick} 
                                             deleteRecipe={this.deleteRecipe} 
                                             history={this.props.history}/>)
                        :<Exception/>} 
                        </div>
                    </div>
                </div>  
            </div>
         );
    }
}

    Favorites.propTypes = {
        getUserRecipes: PropTypes.func.isRequired,
        deleteRecipe: PropTypes.func.isRequired,
        updatePageTitle: PropTypes.func.isRequired,
        setRedirectMessage: PropTypes.func.isRequired,
        favoriteRecipes: PropTypes.array.isRequired,
        pageTitle: PropTypes.string.isRequired,
        deleteFeedBack: PropTypes.object,
        errors: PropTypes.object,
        currentUser: PropTypes.object.isRequired
    }

    const mapStateToProps = state => ({
        favoriteRecipes: state.recipe.favoriteRecipes,
        pageTitle: state.appUtil.pageTitle,
        deleteFeedBack: state.alerts.deleteMessage,
        errors: state.errors,
        currentUser: state.currentUser
    })


    export default connect(mapStateToProps, {
        getUserRecipes,
        deleteRecipe,
        updatePageTitle,
        setRedirectMessage
    })(Favorites);