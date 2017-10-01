import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin: ${ ({ small }) => (small ? 2 : 5) }px;
`

export const Container = ({ children, small, amount }) => (
  <StyledContainer small={ small } amount={ amount }>
    {children}
  </StyledContainer>
)
