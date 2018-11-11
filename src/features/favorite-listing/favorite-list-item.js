import React from 'react'

export default function FavoriteListItem(props) {
  console.log(props)
  return <div className="recipe-list-item">
      <h3> {props.favorite.title} </h3>
      <img
        height={100}
        title={props.favorite.title}
        src={props.favorite.thumbnail}
        alt="pic"
        />
      <div>{ props.favorite.ingredients}</div>
      <div><a href={props.favorite.href}
        rel="noopener noreferrer"
        target="_blank"
        className="button">
        Instructions</a>
      </div>
    </div>
  }

// basic html to render the data coming from the props
