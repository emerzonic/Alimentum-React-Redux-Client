import {
Actions
} from "../actions/types";

const initialState = {
    recipes: [],
    recipe: {},
    isModalOpen:false,
    favoriteRecipes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_RECIPES:
            return { ...state,
                recipes: action.payload
            }
        case Actions.GET_RECIPE:
            return { ...state,
                recipe: action.payload
            }
        case Actions.SET_MODAL_CONTENT:
            return { ...state,
                isModalOpen:action.payload
            }
        case Actions.GET_FAVORITE_RECIPES:
            return { ...state,
                favoriteRecipes: action.payload
            }
        case Actions.DELETE_RECIPE:
            return { ...state,
                favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== action.payload)
            }
        default:
            return state
    }

}