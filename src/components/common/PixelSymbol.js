import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../../config'
// import { Container } from './Container'

const sizeConfig = {
  size: 20,
  width: 3,
  height: 5,
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${ ({ amount }) => amount }, 1fr);
  grid-gap: ${ ({ small }) => (small ? 3 : sizeConfig.size / 2) }px;
  margin: ${ ({ small }) => (small ? 2 : sizeConfig.size / 2) }px;
`

const fadeIn = (from, to) => keyframes`
   0% { transform: scale(1); opacity: 1; background-color: ${ from }}
   49% { background-color: ${ from } }
   50% { transform: scale(0); opacity: 0;}
   51% { background-color: ${ to } }
   100% { transform: scale(1); opacity: 1; background-color: ${ to } }
 `

const PixelFadeIn = styled.div`
  width: ${ ({ small }) => (small ? sizeConfig.size / 5 : sizeConfig.size) }px;
  height: ${ ({ small }) => (small ? sizeConfig.size / 5 : sizeConfig.size) }px;
  border-radius: 1px;
  background-color: ${ ({ color }) => color };
  animation: ${ ({ animation, from, to }) => animation && fadeIn(from, to) } 1s both;
  animation-delay: ${ ({ time, animation }) => animation && time }s;
`

const generateNumber = ({ display, small, animation }) =>
  new Array(sizeConfig.height * sizeConfig.width)
    .fill(<div />)
    .map((tag, index) => (
      <PixelFadeIn
        small={ small }
        color={ display[index] ? colors.foreground : colors.background }
        from={ display[index] ? colors.background : colors.foreground }
        to={ display[index] ? colors.foreground : colors.background }
        key={ index }
        animation={ animation }
      />
    ))

export const Number = props => (
  <Container small={ props } amount={ 3 }>
    {generateNumber(props)}
  </Container>
)
