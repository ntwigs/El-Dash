import * as React from 'react'
import styled from 'styled-components'
import { margin, size, width, height } from './textConfig'
import { colors } from '../../config'

const PixelFadeIn = styled.div`
  backface-visibility: hidden;
  width: ${ size }px;
  height: ${ size }px;
  border-radius: 1px;
  margin: ${ margin }px;
  background-color: ${ ({ color }) => color };
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
      <PixelFadeIn color={ number[index] ? colors.foreground : colors.background } key={ index } />
    ))

export const Number = ({ display: number }) => (
  <NumberContainer>{generateNumber({ number })}</NumberContainer>
)
