import * as React from 'react'
import { Character } from './Character'
import { symbols } from '../../util/symbols'

export const generateCharacters = text => ({ amount, ...props }) =>
  new Array(amount)
    .fill(<div />)
    .map((tag, index) => (
      <Character key={ index } display={ symbols[text[index]] } { ...props } />
    ))
