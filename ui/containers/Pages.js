import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
//Presentational Component from components
import { Pages } from '../components'

export default class PagesContainer extends Component {
  state = {
    pages: []
  }
  componentDidMount() {
    fetch('http://127.0.0.1:5000/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  render() {
    return <Pages pages={this.state.pages} />
  }
}

