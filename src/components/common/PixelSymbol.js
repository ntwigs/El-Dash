import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../config'
import { Container } from './Container'

const sizeConfig = {
  size: 10,
  width: 3,
  height: 5,
}

const PixelFadeIn = styled.div`
  width: ${ ({ small }) => (small ? sizeConfig.size / 5 : sizeConfig.size) }px;
  height: ${ ({ small }) => (small ? sizeConfig.size / 5 : sizeConfig.size) }px;
  border-radius: 1px;
  background-color: ${ ({ color }) => color };
`

const generateNumber = ({ display, small }) =>
  new Array(sizeConfig.height * sizeConfig.width)
    .fill(<div />)
    .map((tag, index) => (
      <PixelFadeIn
        small={ small }
        color={ display[index] ? colors.foreground : colors.background }
        key={ index }
      />
    ))

export const Number = props => (
  <Container small={ props } amount={ 3 }>
    {generateNumber(props)}
  </Container>
)
