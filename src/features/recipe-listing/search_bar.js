import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '', filter: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}                                                   //controlled input from state
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});                                                        //set state to term
    this.props.onSearchTermChange(term);                                          //pass in the term to parent's onSearchTermChange function
  }
}

export default SearchBar;
