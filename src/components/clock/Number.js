import * as React from 'react'
import { compose, lifecycle } from 'recompose'
import styled, { keyframes } from 'styled-components'

const fadeIn = (from, to) => keyframes`
  0% { transform: scale(1); opacity: 1; background-color: ${from}}
  49% { background-color: ${from} }
  50% { transform: scale(0); opacity: 0;}
  51% { background-color: ${to} }
  100% { transform: scale(1); opacity: 1; background-color: ${to} }
`

const PixelFadeIn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  margin: 2px;
  animation: ${({ from, to }) => fadeIn(from, to)} 1s both;
  animation-delay: ${({ time }) => time}s;
`

const Pixel = styled.div`
  width: 50px;
  height: 50px;
  margin: 2px;
`

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
`

const generateNumber = number => {
  const height = 7
  const width = 3
  return new Array(height * width)
    .fill(<div />)
    .map((tag, index) => (
      <PixelFadeIn
        to={number[index] ? '#c3c3c3' : '#292929'}
        from={number[index] ? '#292929' : '#c3c3c3'}
        key={index}
        time={0.05 * index}
      />
    ))
}

export const Number = ({ display: number }) => (
  <NumberContainer>{generateNumber(number)}</NumberContainer>
)
