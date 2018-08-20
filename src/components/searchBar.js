import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { getSearchTerm } from '../actions/getSearchTerm';
import SEARCH from '../actions/constants';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.setTerm = this.setTerm.bind(this);
    this.search = this.search.bind(this);
  }

  setTerm(event) {
    this.setState({
      term: event.target.value
    });
  }

  search() {
    this.props.getSearchTerm('SEARCH', this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div className="SearchBar-container">
        <input type="text" onChange={this.setTerm} placeholder='insert here your research term, ex: "Juventus"'/>
        <button onClick={this.search}>SEARCH!</button>
      </div>
    );
  }
}

export default connect(
  null,
  { getSearchTerm }
)(SearchBar);