import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
<<<<<<< HEAD
=======

>>>>>>> d60ad1bd10bdedbb2595aa3236357cbb9c286a66
import './scss/style' //for dev only

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRootApp = require('./containers/Root').default
<<<<<<< HEAD
    
=======

>>>>>>> d60ad1bd10bdedbb2595aa3236357cbb9c286a66
    render(
      <AppContainer>
         <NextRootApp />
      </AppContainer>,
      rootEl
    );
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> d60ad1bd10bdedbb2595aa3236357cbb9c286a66
