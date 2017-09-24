import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { margin, size, width, height } from './textConfig'
import { colors } from '../../config'

const fadeIn = (from, to) => keyframes`
  0% { transform: scale(1); opacity: 1; background-color: ${ from };}
  100% { transform: scale(1); opacity: 1; background-color: ${ to };}
`

const PixelFadeIn = styled.div`
  backface-visibility: hidden;
  width: ${ size }px;
  height: ${ size }px;
  border-radius: 1px;
  margin: ${ margin }px;
  animation: ${ ({ from, to }) => fadeIn(from, to) } 0s both;
`

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${ size * width + size + margin * 4 }px;
  min-width: ${ size * width + size + margin * 4 }px;
`

const generateNumber = ({ number }) =>
  new Array(height * width)
    .fill(<div />)
    .map((tag, index) => (
      <PixelFadeIn
        to={ number[index] ? colors.foreground : colors.background }
        from={ number[index] ? colors.background : colors.foreground }
        key={ index }
      />
    ))

export const Number = ({ display: number }) => (
  <NumberContainer>{generateNumber({ number })}</NumberContainer>
)
