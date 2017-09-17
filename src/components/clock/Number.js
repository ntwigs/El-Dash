import * as React from 'react'
import styled from 'styled-components'

const Pixel = styled.div`
  width: 50px;
  height: 50px;
  margin: 2px;
  background-color: ${props => props.color};
`

const NumberContainer = styled.div`
  width: ${props => props.width * props.amount}px;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
`

const generateNumber = (number) => {
  const height = 7
  const width = 3
  return new Array(height * width)
    .fill(<Pixel color={'#292929'} />)
    .map((tag, index) => (number[index] ? <Pixel color={'white'} /> : tag))
}

export const Number = ({ display: number }) => (
  <NumberContainer>{generateNumber(number)}</NumberContainer>
)
