import * as React from 'react'
import { Number } from './Character'
import { symbols } from '../../util/symbols'

export const generateCharacters = text => ({ amount, small, animation }) =>
  new Array(amount)
    .fill(<div />)
    .map((tag, index) => (
      <Number key={ index } display={ symbols[text[index]] } { ...{ small, animation } } />
    ))
