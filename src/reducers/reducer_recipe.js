import { FETCH_RECIPE } from '../actions/index';
// importing FETCH_RECIPE variable for consistency (incase of misspelling the action.type)

export default function RecipeReducer(state = {}, action) {
  switch (action.type){
    case FETCH_RECIPE:
      return action.payload.data                                                  // the list of recipes
    default:
      return state;
  }
}
