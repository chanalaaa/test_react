import React, { Component,PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

export default class Pages extends Component  {

  static propTypes = {
    pages: PropTypes.array.isRequired,
    onReloadPages: PropTypes.func.isRequired
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
            this.props.pages.map((page) => (
              <Page key={page.id} id={page.id} title={page.title}/> 
              //<Page key={page.id} page={page} /> 
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default Pages