import {
    GET_RECIPES,
    GET_RECIPE,
    GET_FAVORITE_RECIPES,
    DELETE_RECIPE, 
    SET_MODAL_CONTENT
} from "../actions/types";

const initialState = {
    recipes: [],
    recipe: {},
    isModalOpen:false,
    favoriteRecipes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return { ...state,
                recipes: action.payload
            }
        case GET_RECIPE:
            return { ...state,
                recipe: action.payload
            }
        case SET_MODAL_CONTENT:
            return { ...state,
                isModalOpen:action.payload
            }
        case GET_FAVORITE_RECIPES:
            return { ...state,
                favoriteRecipes: action.payload
            }
        case DELETE_RECIPE:
            return { ...state,
                favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== action.payload)
            }
        default:
            return state
    }

}