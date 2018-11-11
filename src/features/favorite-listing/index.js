import React from 'react'
import FavoriteListItem from './favorite-list-item'


export default function FavoriteListing(props) {
  if(props.favorite === undefined){
    return <div> loading... </div>                                               // loader when state is undefined until data comes
  }
  return <div className="recipe-listing">
    {
      props.favorite.map(favorite =>                                             // mapping each favorite from props into child component
        <FavoriteListItem
          favorite={favorite}
          key={favorite.href}
          />
      )
    }
  </div>
}
