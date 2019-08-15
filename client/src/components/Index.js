import * as React from 'react'
import styled from 'styled-components'
import {GenerateComponent} from './common/generateComponent'
import {colors} from '../config'
import {Editor} from './editor'
import {ComponentProvider} from './context'

const IndexStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  overflow: hidden;
`

export const Index = () => (
  <ComponentProvider>
    <IndexStyled>
      <Editor />
      <GenerateComponent />
    </IndexStyled>
  </ComponentProvider>
)
