import axios from 'axios';
import http from 'http'

export const FETCH_RECIPE = 'Fetch_Recipe'
export const FETCH_OFFERS_SUCCESS = 'Fetch_Offers_Success'


export const fetchRecipeSuccess = (recipe) => {
  return {
    type: FETCH_RECIPE,
    payload: recipe
  }
}

export default function fetchRecipe(term) {
  return (dispatch) => {
    return axios.get(`recipes/${term}`)                                           // to server
      .then(response => {
        console.log(response)
        dispatch(fetchRecipeSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
