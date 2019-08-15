import * as React from 'react'
import {compose, withState, withHandlers} from 'recompose'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import Resizable from 're-resizable'
import {ComponentConsumer} from '../context'

const StyledContainer = styled(Draggable)`
  margin: ${({small}) => (small ? 2 : 5)}px;
`

const CharacterContainer = styled.div`
  display: flex;
  transform-origin: top left;
  transform: scale(${({scale}) => scale});
  overflow: visible;
`

const StyledResizable = styled(Resizable)`
  transition: border 250ms;
  border: 1px solid ${({focus}) => (focus ? 'red' : 'transparent')};
  position: absolute !important;
`

const PureContainer = ({
  children,
  position,
  id,
  onResize,
  size,
  onFocus,
  onBlur,
  focus,
  onResizeStart,
  onResizeStop,
  isDragging,
  ...props
}) => (
  <ComponentConsumer>
    {({updatePosition}) => (
      <StyledContainer
        {...props}
        position={position}
        onStart={tes => {
          console.log(tes)
          return tes._dispatchListeners.length < 2
          return !isDragging
        }}
        onStop={(_, e) => updatePosition({id, e})}>
        <StyledResizable
          focus={focus}
          onResizeStart={onResizeStart}
          onResizeStop={onResizeStop}
          onFocus={onFocus}
          onBlur={onBlur}
          tabindex="0"
          lockAspectRatio
          onResize={onResize}>
          <CharacterContainer scale={size}>{children}</CharacterContainer>
        </StyledResizable>
      </StyledContainer>
    )}
  </ComponentConsumer>
)

export const Container = compose(
  withState('size', 'setSize', 1),
  withState('focus', 'setFocus', false),
  withState('isDragging', 'setIsDragging', false),
  withHandlers({
    onResize: ({setSize}) => (_, __, c) => {
      const width = c.clientWidth
      const scale = width / 490
      setSize(scale)
    },
    onFocus: ({setFocus}) => () => {
      setFocus(true)
    },
    onBlur: ({setFocus}) => () => {
      setFocus(false)
    },
    onResizeStart: ({setIsDragging}) => () => {
      setIsDragging(true)
    },
    onResizeStop: ({setIsDragging}) => () => {
      setIsDragging(false)
    },
  }),
)(PureContainer)
