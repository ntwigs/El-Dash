import * as React from 'react'
import styled from 'styled-components'
import { Text } from '../information/Text'

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const checkChildren = ({ children }) => {
  const smallProofChildren = children.map(
    child => (child.props.small ? child : <Text key={ null } text='small' small />),
  )
  return smallProofChildren
}

export const Row = props => <StyledRow>{checkChildren(props)}</StyledRow>
