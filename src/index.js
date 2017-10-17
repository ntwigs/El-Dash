import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { Index } from './components/Index'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
