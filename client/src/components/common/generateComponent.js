import * as React from 'react'
import { components } from '../../util/components'
import { Commits } from '../information/Commits'
import { Subscribers } from '../information/Subscribers'
import { Text } from '../information/Text'
import { Time } from '../information/Time'
import { Weather } from '../information/Weather'

const componentHash = {
  [components.text]: ({ value: text, position, id }) => (
    <Text text={text} type={components.text} id={id} position={position} />
  ),
  [components.commits]: ({ position, id }) => (
    <Commits type={components.commits} id={id} position={position} />
  ),
  [components.subscribers]: ({ position, id }) => (
    <Subscribers type={components.subscribers} id={id} position={position} />
  ),
  [components.time]: ({ position, id }) => (
    <Time type={components.time} id={id} position={position} />
  ),
  [components.weather]: ({ position, id }) => (
    <Weather type={components.weather} id={id} position={position} />
  ),
}

export const generateComponent = ({ components }) =>
  components.map(({ type, value, position, id }) =>
    componentHash[type]({ value, position, id })
  )
