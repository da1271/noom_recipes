import React from 'react'

export default function RecipeListItem(props) {
  return <div className="recipe-list-item">
    <h3>{ props.recipe.title }</h3>
    <img
      height={100}
      title={props.recipe.title}
      src={props.recipe.thumbnail}
      alt="pic"
      />
    <div>{ props.recipe.ingredients }</div>
    <div><a href={ props.recipe.href }
      target="_blank"
      className="button"
      rel="noopener noreferrer"
      >Instructions</a>
    </div>
    <button
      onClick={() => props.addToFavorite(props.recipe)}
      >Favorite</button>
  </div>
}

// basic html to render the data coming from the props
