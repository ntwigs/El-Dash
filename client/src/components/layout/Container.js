import * as React from 'react'
import styled from 'styled-components'
import { Commits } from '../information/Commits'
import { Time } from '../information/Time'
import { Text } from '../information/Text'
import { Row } from './Row'

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`

const renderDefault = () => (
  <StyledContainer>
    <Row>
      <Time small animation />
      <Text small text={ 'commits' } />
    </Row>
    <Commits animation />
  </StyledContainer>
)

const checkChildren = ({ children }) => children || renderDefault()

export const Container = props => <StyledContainer>{checkChildren(props)}</StyledContainer>