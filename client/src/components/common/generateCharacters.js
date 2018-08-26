import * as React from 'react'
import { Character } from './Character'
import { symbols } from '../../util/symbols'

export const generateCharacters = text => ({ amount, ...props }) =>
  Array(amount)
    .fill(<div />)
    .map((_, index) => (
      <Character key={index} display={symbols[text[index]]} {...props} />
    ))
