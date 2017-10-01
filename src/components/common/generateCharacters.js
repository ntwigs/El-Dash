import * as React from 'react'
import { Number } from './Character'

export const generateCharacters = (display, text) => ({ amount, small, animation }) => new Array(amount)
  .fill(<div />)
  .map((tag, index) => (
    <Number key={ index } display={ display[text[index]] } { ...{ small, animation } } />
  ))
