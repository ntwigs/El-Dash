import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../information/Text'

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const checkChildren = ({ children }) => {
  const childrenAsArr = Array.isArray(children) ? children : [children]
  return childrenAsArr.map(
    child => (child.props.small ? child : <Text key={ null } text='small' small />),
  )
}

export const Row = props => <StyledRow>{checkChildren(props)}</StyledRow>
