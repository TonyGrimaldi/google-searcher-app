import React, { Component } from 'react';
import axios from 'axios';

const URL = 'https://www.googleapis.com/customsearch/v1?';
const key = 'AIzaSyAZzAPJwFLT6VuWqo03IHdJ86K7ndGAET4';
const cx = '000674345227953438871:y-whkppmv8k';
const query = 'juventus';
const fullURL = `${URL}key=${key}&cx=${cx}&q=${query}`;




export default class App extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    axios.get(fullURL)
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }

  render() {
    return (
      <div>{console.log(this.state)}</div>
    );
  }
}
