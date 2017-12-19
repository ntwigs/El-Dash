import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin: ${ ({ small }) => (small ? 2 : 5) }px;
`

export const Container = ({ children, ...props }) => (
  <StyledContainer { ...props }>{ children }</StyledContainer>
)
