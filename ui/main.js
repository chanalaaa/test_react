import React, { Component } from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './scss/style' //for dev only

render(routes(), document.getElementById('app'))
