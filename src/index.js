import dotenv from 'dotenv'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'

dotenv.config()

window.React = React
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
