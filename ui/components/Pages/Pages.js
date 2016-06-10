import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

class Pages extends Component {
  state = {
    pages: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            this.state.pages.map((page) => (
              <Page key={page.id} page={page} /> 
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default Pages