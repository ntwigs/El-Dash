import * as React from 'react'
import { compose, withState } from 'recompose'

const enhance = compose(
  mapProps(({ numbers: badNumbers, ...props }) => {
    const numbers = filterOutSmallerThanThree(numbers)
    return { numbers, ...props }
  }),
  withState('count', 'setCounter', ({numbers}) => {

  }),
)

const filterOutSmallerThanThree = numbers => {
  return numbers
    .filter(n => n < 3)
    .map(n => <p>{n}</p>)
}

export const Counter = ({ numbers, count, setCounter }) =>
  <div>

  </div>

export const SuperCounter = enhance(Counter)



const Supercounter = ({super}) =>
  div.hejsan      