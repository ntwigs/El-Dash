import * as React from 'react'
import styled from 'styled-components'

const Pixel = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};
  margin-left: 5px;
  display: flex;
`

const NumberContainer = styled.div`
  background-color: green;
  width: 33%;
`

const two = [
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
]

const generateNumber = () => {
  const height = 7
  const width = 3
  return new Array(height * width)
    .fill(<Pixel color={'red'} />)
    .map((tag, index) => (two[index] ? <Pixel color={'white'} /> : tag))
}

export const Number = ({ number }) => (
  <NumberContainer>{generateNumber()}</NumberContainer>
)
