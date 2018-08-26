import * as React from 'react'
import { compose, mapProps, withState, withHandlers } from 'recompose'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const StyledContainer = styled(Draggable)`
  margin: ${({ small }) => (small ? 2 : 5)}px;
`

const CharacterContainer = styled.div`
  display: flex;
  margin: ${({ small }) => (small ? 2 : 5)}px;
`

const PureContainer = ({ children, ...props }) => (
  <StyledContainer {...props} position={null}>
    <CharacterContainer>{children}</CharacterContainer>
  </StyledContainer>
)

// TODO: STORE EACH COMPONENT INSIDE LOCALSTORAGE WITH A POSITION ON DROP
export const Container = compose(
  withState('meta', 'setMeta', attributes => attributes),
  withHandlers({
    onStop: data => (_, { x, y }) => {
      localStorage.setItem('location', 'wat')
    },
  })
)(PureContainer)
