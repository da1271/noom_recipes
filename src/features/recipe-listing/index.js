import React from 'react'
import RecipeListItem from './recipe-list-item'
import { connect } from 'react-redux';

function RecipeListing(props) {
  if(props.recipes === undefined){
    return <div> loading... </div>                                                // loader when state is undefined until data comes
  }
  return <div className="recipe-listing">
    {
      props.recipes.map(recipe =>                                                 //mapping each recipe from props into child component: RecipeListItem.
        <RecipeListItem
          key={recipe.href}
          recipe={recipe}
          addToFavorite={props.addToFavorite}
        />
      )
    }
  </div>
}

function mapStateToProps(state) {
  return {
    favorite: [state.favorite]
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToFavorite: (recipe) => {
      dispatch({ type: 'ADD', payload: recipe })                                  // the action that will dispatch to the reducer to fetch the data.
    }                                                                             //called from child component RecipeListItem as props
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing)
