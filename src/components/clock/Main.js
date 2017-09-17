import * as React from 'react'
import styled from 'styled-components'
import { Number } from './Number'

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Clock = () => (
  <NumberContainer>
    <Number />
    <Number />
    <Number />
    <Number />
  </NumberContainer>
)
