import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

import RecipeListing from '../features/recipe-listing'
import SearchBar from '../features/recipe-listing/search_bar';
import fetchRecipe from '../actions/index'

class Homepage extends React.Component {
  constructor(props) {
      super(props);
      this.recipeSearch = this.recipeSearch.bind(this);
      this.recipeSearch = _.debounce(this.recipeSearch, 400);                     // used lodash debounce for handling requests onchange. ensure no calls before stop typing
      this.state = {
        recipe: []
      };
      this.recipeSearch('burger')                                                 // default search term as Burger because who doesnt love burgers? it had the most thumbnails
    }
    recipeSearch(term){
      this.props.fetchRecipe(term);
    }

    render() {
      return <div>
            <h2>Homepage</h2>
            <SearchBar onSearchTermChange={term => this.recipeSearch(term)} />
            <RecipeListing recipes={this.props.recipes} />
            </div>
    }
  }

function mapStateToProps(state) {
  return {
    recipes: state.recipes.results
  };
}

export default connect(mapStateToProps, { fetchRecipe }) (Homepage);
