import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${ ({ amount }) => amount }, 1fr);
  grid-gap: ${ ({ small }) => (small ? 3 : 10) }px;
`

export const Container = ({ children, small, amount }) => {
  return <StyledContainer small={ small } amount={ amount }>
    { children }
  </StyledContainer>
}
