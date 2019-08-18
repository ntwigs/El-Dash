import * as React from 'react'
import {components} from '../../util/components'
import {Commits} from '../information/Commits'
import {Subscribers} from '../information/Subscribers'
import {Text} from '../information/Text'
import {Time} from '../information/Time'
import {Weather} from '../information/Weather'
import {Weekday} from '../information/Weekday'
import {Today} from '../information/Today'
import {ComponentConsumer} from '../context'

const componentHash = {
  [components.text]: ({value: text, position, id}) => (
    <Text animation text={text} type={components.text} id={id} position={position} />
  ),
  [components.commits]: ({position, id}) => (
    <Commits  animation type={components.commits} id={id} position={position} />
  ),
  [components.subscribers]: ({position, id}) => (
    <Subscribers animation type={components.subscribers} id={id} position={position} />
  ),
  [components.time]: ({position, id}) => (
    <Time animation type={components.time} id={id} position={position} />
  ),
  [components.weather]: ({position, id}) => (
    <Weather animation type={components.weather} id={id} position={position} />
  ),
  [components.date]: ({position, id}) => (
    <Weekday animation type={components.date} id={id} position={position} />
  ),
  [components.today]: ({position, id}) => (
    <Today animation type={components.date} id={id} position={position} />
  ),
}

export const GenerateComponent = () => (
  <ComponentConsumer>
    {({components}) =>
      components.map(({type, value, position, id}) =>
        componentHash[type]({value, position, id}),
      )
    }
  </ComponentConsumer>
)
