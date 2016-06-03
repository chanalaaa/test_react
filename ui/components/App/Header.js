import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <a href='/' className='brand'>
            Babel Coder Wiki!
          </a>
          <ul className='menu'>
            <li className='menu__item'>
              <a href='/pages' className='menu__link'>
                All Pages
              </a>
            </li>
            <li className='menu__item'>
              <a
                href='#'
                className='menu__link'>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}