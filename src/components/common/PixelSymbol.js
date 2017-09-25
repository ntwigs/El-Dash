import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../config'

const sizeConfig = {
  size: 30,
  width: 3,
  margin: 2,
  height: 5,
  mainWidth: 4,
}

const calculateSize = () => {
  const { size, margin, mainWidth } = sizeConfig
  return (size + margin) * mainWidth
}

const PixelFadeIn = styled.div`
  backface-visibility: hidden;
  width: ${ sizeConfig.size }px;
  height: ${ sizeConfig.size }px;
  border-radius: 1px;
  margin: ${ sizeConfig.margin }px;
  background-color: ${ ({ color }) => color };
`

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${ calculateSize() }px;
  min-width: ${ calculateSize() }px;
`

const generateNumber = ({ number }) =>
  new Array(sizeConfig.height * sizeConfig.width)
    .fill(<div />)
    .map((tag, index) => (
      <PixelFadeIn color={ number[index] ? colors.foreground : colors.background } key={ index } />
    ))

export const Number = ({ display: number }) => (
  <NumberContainer>{generateNumber({ number })}</NumberContainer>
)
