import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { loadPages } from '../../actions/page'
import { Pages } from '../../components'

 

class PagesContainer extends Component {
  
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

   shouldComponentUpdate(nextProps) {
      return this.props.pages !== nextProps.pages;
    }

   onReloadPages = () => {
      this.props.onLoadPages()
      // fetch(PAGES_ENDPOINT)
      //   .then((response) => response.json())
      //   .then((pages) => this.setState({ pages }))
    }
    
    componentDidMount() {
      this.onReloadPages()
    }

    render() {
      return (
        <Pages
          pages={this.props.pages}
          onReloadPages={this.onReloadPages} />
      )
    }
  }


//////////////////////////



 