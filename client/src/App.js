import * as React from 'react'
import { injectGlobal } from 'styled-components'
import { Index } from './components/Index'

injectGlobal`
  margin: 0;
  padding: 0;
`

export const App = () =>
  <Index />
