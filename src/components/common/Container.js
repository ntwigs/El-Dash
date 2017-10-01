import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin: ${ ({ small }) => (small ? 2 : 5) }px;
`

  // display: grid;
  // grid-template-columns: repeat(${ ({ amount }) => amount }, 1fr);
  // grid-gap: ${ ({ small }) => (small ? 3 : 10) }px;
  // background-color: red;

export const Container = ({ children, small, amount }) => (
  <StyledContainer small={ small } amount={ amount }>
    {children}
  </StyledContainer>
)
