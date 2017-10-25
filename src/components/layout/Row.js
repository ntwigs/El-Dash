import * as React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const checkChildren = ({ children }) => {
  const childrenAsArr = Array.isArray(children) ? children : [children]
  return childrenAsArr.map((child, index) => React.cloneElement(child, { small: true, key: index }))
}

export const Row = props => <StyledRow>{checkChildren(props)}</StyledRow>
