import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
         <Link
            to={{ pathname: '/' }}
            className='brand'>
            Babel Coder Wiki!
          </Link>
          <ul className='menu'>
            <li className='menu__item'>
              <Link
              to={{ pathname: '/pages' }} className='menu__link'>
                All Pages
              </Link>
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