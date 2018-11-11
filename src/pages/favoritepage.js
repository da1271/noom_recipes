import React from 'react'
import { connect } from 'react-redux';

import FavoriteListing from '../features/favorite-listing/index.js'

class FavoritePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        favorite: []
      };
    }
                                                                                 // passing in an Array of favorites from props to have acces from child component
  render() {
    return <div>
          <h2>FavoritePage</h2>
          <FavoriteListing favorite={this.props.favorite} />
          </div>
  }
}

function mapStateToProps(state) {                                                 // this.props has the list of favorited recipes which is passed onto child component 
  return {
    favorite: state.favorite
  };
}

export default connect(mapStateToProps) (FavoritePage);
