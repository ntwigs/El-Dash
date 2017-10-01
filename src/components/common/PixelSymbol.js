import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors, size, animationConfig } from '../../config'

const sizeConfig = {
  width: 3,
  height: 5,
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${ ({ amount }) => amount }, 1fr);
  grid-gap: ${ ({ small }) => (small ? 2 : size / 2) }px;
  margin: ${ ({ small }) => (small ? 2 : size / 2) }px;
`

const fadeIn = (from, to) => keyframes`
   0% { transform: scale(1); opacity: 1; background-color: ${ from } }
   49% { background-color: ${ from } }
   50% { transform: scale(0); opacity: 0; }
   51% { background-color: ${ to } }
   100% { transform: scale(1); opacity: 1; background-color: ${ to } }
 `

const PixelFadeIn = styled.div`
  width: ${ ({ small }) => (small ? size / 4 : size) }px;
  height: ${ ({ small }) => (small ? size / 4 : size) }px;
  border-radius: 1px;
  background-color: ${ ({ color }) => color };
  animation: ${ ({ animation, from, to }) => animation && fadeIn(from, to) } ${ () => animationConfig.speed }s both;
  animation-delay: ${ ({ time, animation }) => time }s;
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
        time={ index * animationConfig.delay }
        animation={ animation }
      />
    ))

export const Number = props => (
  <Container small={ props } amount={ 3 }>
    {generateNumber(props)}
  </Container>
)
