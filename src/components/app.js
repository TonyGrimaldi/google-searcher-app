import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './header';
import SearchBar from './searchBar';
import ListOfResults from './listOfResults';

const key2 = 'AIzaSyAXntsWTispjPzlMEcMDk7n44z5g6O1Yy8';
const basicURL = 'https://www.googleapis.com/customsearch/v1?';
const key = 'AIzaSyAZzAPJwFLT6VuWqo03IHdJ86K7ndGAET4';
const cx = '000674345227953438871:y-whkppmv8k';
const query = 'juventus';
const URL = `${basicURL}key=${key2}&cx=${cx}&q=`;


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    this.searchNews = this.searchNews.bind(this);
  }

  searchNews() {    
    const fullURL = `${URL}${this.props.term}`;
    axios.get(fullURL)
      .then(res => {
        const results = res.data;
        this.setState({ results });
    });   
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar />
        <button id="search-button" onClick={this.searchNews}>searchterm</button>
        <ListOfResults 
          results={this.state.results}
        />
      </div>
    );
  }
}

export default connect(state => ({
  term: state.term.searchTerm
}))(App);