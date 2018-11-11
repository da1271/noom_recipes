import axios from 'axios';

export const FETCH_RECIPE = 'Fetch_Recipe'

export default function fetchRecipe(term) {
  const request = axios.get(`http://www.recipepuppy.com/api/?q=${term}`);         // the api call with the input "term"

  return {
    type: FETCH_RECIPE,                                                           // type of action and exporting to reducer to ensure not misspelling
    payload: request                                                              // request or the promise to be resolved
  }
}
