import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
//Presentational Component from components
import { Pages } from '../components'
import { PAGES_ENDPOINT } from '../constants/endpoints'

export default class PagesContainer extends Component {
  state = {
    pages: []
  }
  componentDidMount() {
     //fetch('/api/v1/pages') 
     fetch(PAGES_ENDPOINT)
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  render() {
    return <Pages pages={this.state.pages} />
  }
}

