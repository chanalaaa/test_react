import React, { Component } from 'react'
import { render } from 'react-dom'
<<<<<<< HEAD
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'

import './scss/style' //for dev only

const rootEl = document.getElementById('app')
=======
import routes from './routes'


import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import './scss/style' //for dev only

render(routes(), document.getElementById('app'))
>>>>>>> 0e0f9684d70f793019a0d97f358c85fc6250418e

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
>>>>>>> 0e0f9684d70f793019a0d97f358c85fc6250418e
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
>>>>>>> 0e0f9684d70f793019a0d97f358c85fc6250418e
