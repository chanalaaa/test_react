import React, { Component } from 'react'
import 'scss/style'

class Home extends Component {
  render() {
    return (
      <h2 className={styles['title']}>
        Welcome to BabelCoder Wiki!
      </h2>
    )
  }
}

export default Home