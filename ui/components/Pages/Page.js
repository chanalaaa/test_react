import React, { Component } from 'react'

export default class Page extends Component {
  render() {
    const { id, title } = this.props.page

    return (
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <a href='javascript:void(0)'>Show</a>
        </td>
      </tr>
    )
  }
}