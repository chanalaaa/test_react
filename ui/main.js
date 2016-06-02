import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import 'scss/style'

render(routes(), document.getElementById('app'))
