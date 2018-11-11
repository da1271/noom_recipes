import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipe'
import FavoriteReducer from './reducer_favorites'

const rootReducer = combineReducers({ // 2 reducers. 1 for the homepage to get the recipes, and the other for getting the list of favorited recipes
  recipes: RecipeReducer,
  favorite: FavoriteReducer
})

export default rootReducer;
