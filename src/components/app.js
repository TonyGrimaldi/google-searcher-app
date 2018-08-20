import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './header';
import SearchBar from './searchBar';

const URL = 'https://www.googleapis.com/customsearch/v1?';
const key = 'AIzaSyAZzAPJwFLT6VuWqo03IHdJ86K7ndGAET4';
const cx = '000674345227953438871:y-whkppmv8k';
const query = 'juventus';
const fullURL = `${URL}key=${key}&cx=${cx}&q=${query}`;




export class App extends Component {
  state = {
    results: []
  }

/*  componentDidMount() {
    axios.get(fullURL)
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }
*/
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        {console.log(this.props)}
      </div>
    );
  }
}

export default connect(state => ({
  term: state.term.searchTerm
}))(App);